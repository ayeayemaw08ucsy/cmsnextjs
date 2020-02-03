import sendRequest from "./sendRequest";

const BASE_PATH = '/api/v1';

export const addArticle = ({title,slug,content}) => 
    sendRequest(`${BASE_PATH}/articles/add`, {
        body: JSON.stringify({title,slug,content}),
    });

export const getArticleDetail = ({ _id ,slug }) =>
  sendRequest(`${BASE_PATH}/detail/${_id}/${slug}`, {
    method: 'GET',
  });

export const getArticleList = ({page , total}) =>
  sendRequest(`${BASE_PATH}/article-list/${page}/${total}`, {
    method: 'GET',
  });

export const getArticleCount = () => 
sendRequest(`${BASE_PATH}/count`, {
  method: 'GET',
});


