import Header from '../components/Header';
import Link from 'next/link';
import { getArticleList } from '../lib/api/article';
import MyCard from '../components/MyCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paginator from '../components/Pagination';
import { useState } from 'react';
import Router from 'next/router'
import {styleBody}  from '../components/SharedStyles';

// const cards = props => {

//         props.articles.map((ele,index) => 
//         <Card info={ele} key={index}/>
//         );
// }

const calculateRange = length => Array.from({ length }, (v, k) => k + 1);

const Articles = list => {
   
    const [limit, updateLimit] = useState(5);
    //const totalPage = list.articles.length / limit;
    const totalPage = Math.ceil(list.total > 0 ? list.total/limit : 0);
    const [page , updatePage] = useState(!!totalPage ? totalPage : 1);
    //const rangeLimit = Math.ceil(list.articles.length > 0 ? list.articles.length/limit : 0);
    const rangeLimit = totalPage;
    const range = calculateRange(rangeLimit);

    const changePageValue = event => {
        console.log('Before Page',page);
        updatePage(event);
        console.log('After Page',page);
        Router.push({
            pathname: '/article-list',
            query: { total: list.total , page: page }
        })
    };
    console.log('Paginator Range and Page',range,page);
    return (
        <div>
        <Header/>
        <div style={styleBody}>
        <h1>Article List</h1>
            {/* { <ul>
                {props.articles.map(article =>(
                  <li key={article._id}>
                   <Link href="/detail/[_id]/[slug]" as={`/detail/${article._id}/${article.slug}`}>
                         <a>{article.title}</a>
                 </Link>
                  </li>   
                ))}
            </ul>} */}
            
            {list.articles.map((article,index) =>(
                <MyCard info={article} key={article._id}/>
            ))}
          
            <Paginator
                 handlePaginationChange={changePageValue}
                 range={range}
                 skip={page}
             />
         </div> 
        </div>
    )
}

Articles.getInitialProps = async (context) =>{
     
    let total = context.query.total;
    let page = context.query.page;
    const res = await getArticleList({page,total});
  
    return res
}

export default Articles;