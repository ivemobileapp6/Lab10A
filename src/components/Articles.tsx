import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import articles from "./data/articles.json";
import { api } from "./common/http-common";
import axios from "axios";

const Articles = () => {
  const [loading, setLoading] = React.useState(true);
  const [articles, setArticles] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(`${api.url}/articles`)
      .then((res) => {
        // console.log(res.data)
        setArticles(res.data);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Loading ...</p>;
  } else {
    if (!articles) {
      return <p>No articles found</p>;
    } else {
      return (
        <>
          <p>{localStorage.getItem("atoken")}</p>
          <Row justify="space-around">
            {articles &&
              articles.map(({ id, title, allText }) => (
                <Col span={8} key={id}>
                  <Card title={title} style={{ width: 300 }}>
                    <p>{allText}</p>
                    <p></p>
                    <Link to={`/a/${id}`}>Details</Link>
                  </Card>
                </Col>
              ))}
          </Row>
        </>
      );
    }
  }
};

export default Articles;
// return (
//   < Row justify="space-around">
//     {
//       articles && articles.map(({id, title, allText})=>(
//         <Col span={8} key={id}>
//           <Card title={title} style={{width:300}}>
//             <p>{allText}</p>
//             <p></p>
//             <Link to={`/a/${id}`}>Details</Link>
//           </Card>
//         </Col>
//       ))
//     }
//   </Row>
// )
