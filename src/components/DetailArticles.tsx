import React from 'react';
import articles from './data/articles.json';
import { Button } from 'antd';
import { useParams, useNavigate} from 'react-router-dom';

const DetailArticle = (props) => { //aid come from props
  const {aid} = useParams();
  const navigate = useNavigate(); //useNavigate = backbutton
  for(const article of articles) {
    if(article.id==aid){
      return(
        <>
          <h1>{articles.title}</h1>
          <p>{articles.fullText}</p>
          <Button type="primary" onClick={()=>navigate(-1)}>Back</Button>
        </>
      )
    }
  }
  
}
export default DetailArticle;