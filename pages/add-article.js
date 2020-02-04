import React ,{createRef} from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import {styleBody}  from '../components/SharedStyles';
import EditArticle from '../components/EditArticle';
import { addArticle } from '../lib/api/article';
import Router from 'next/router';
import Header from '../components/Header';
import Layout from '../components/MyLayout';
import { Notifier } from '../components/Notifier';

class AddArticle extends React.Component {
  
    constructor() {

        super();
         this.snackbarRef = createRef();
     }
      
      componentWillUnmount() {
          
      }

    addArticleOnSave = async (data) => {
        try {
            
            const article = await addArticle(data);
            this.snackbarRef.current.openSnackBar('Saved..');
         
            Router.push({
                pathname: '/article-list',
                query: { total: article.total , page: 1 }
            })
        }catch(err){

           this.snackbarRef.current.openSnackBar('Unsuccessfully Saved');
        }
        
    }

    render() {
        return (
          
            <Layout>
            <div style={styleBody}>
            <h1>Create Article</h1>
              <EditArticle onSave={this.addArticleOnSave}/>
            </div>
            <Notifier ref= {this.snackbarRef}/>
            </Layout>
        
        )
    }
}

export default AddArticle;