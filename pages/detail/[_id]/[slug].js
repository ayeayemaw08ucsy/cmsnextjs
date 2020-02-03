import Header from  '../../../components/Header';
import Layout from '../../../components/MyLayout';
import { getArticleDetail } from '../../../lib/api/article';
import dynamic  from 'next/dynamic';
import marked from 'marked'
import {styleBody}  from '../../../components/SharedStyles';

const Highlight = dynamic(() => import('react-highlight'));

const Post = props => {

    if(/~~~/.test(props.article.content)) {
        return (
          <div style={{ padding: '30px 50px' }}>
          <Header/>
           <div style={styleBody}>
            <h1>{props.article.title}</h1>
            <Highlight innerHTML>{marked(props.article.content)}</Highlight>
          </div>
          </div>
        );
  
  
      }
  return  (
    <div style={{ padding: '30px 50px' }}>
    <Header/>
    <div style={styleBody}>
     <h1>{props.article.title}</h1>
     <div dangerouslySetInnerHTML={{ __html: marked(props.article.content) }} />
    </div>
    </div>)
}


Post.getInitialProps = async function(context) {
    const {_id , slug} = context.query;
    const res = await getArticleDetail({_id,slug})
    const article = res.article;
    return {article};
}
export default Post;