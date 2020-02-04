import Header from  '../components/Header';
import AddArticle from './add-article';
import Articles from './article-list';
import Layout from '../components/MyLayout';
import { getArticleList , getArticleCount } from '../lib/api/article';
import { useState } from 'react';

const Index = props => {

  return (
    
     <Articles articles={props.articles} total={props.total} page={props.page}/>
    
  )
}

Index.getInitialProps = async function(){
   
    const total = await getArticleCount();
    const page = total > 5 ? Math.floor(total/5) : 1;
    const res = await getArticleList({page,total});
    return Object.assign({},{total:total},{page:page},res);
}
export default Index;