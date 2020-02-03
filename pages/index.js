import Header from  '../components/Header';
import AddArticle from './add-article';
import Articles from './article-list';
import Layout from '../components/MyLayout';
import { getArticleList , getArticleCount } from '../lib/api/article';
import { useState } from 'react';

const Index = props => {

  return (
    <div style={{ padding: '10px 45px' }}>
    <Header/>
     { <Articles articles={props.articles} total={props.total} page={props.page}/>}
     {/* { <ul>
                {props.articles.map(article =>(
                  <li key={article._id}>
                    <a>{article.title}</a>
                  </li>   
                ))}
            </ul>}  */}
    </div>
  )
}

// const Index = () => {
  
//       return (
//         <div style={{ padding: '10px 45px' }}>
//         <Head/>
//          <Articles/>
//         </div>
//       )
//     }

//     Index.getInitialProps = async function() {
//       return {}
//     }

Index.getInitialProps = async function(){
    const total = await getArticleCount();
    const page = total > 5 ? Math.floor(total/5) : 1;
    const res = await getArticleList({page,total});
    return Object.assign({},{total:total},{page:page},res);
    //return res;
}
export default Index;