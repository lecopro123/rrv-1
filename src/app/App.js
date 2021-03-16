import "./App.scss";
import NavBar from "./components/navbar/navbar";
import logo from "../assets/logo.png";
import chevronUp from "../assets/up-chevron.svg";
import { useEffect, useRef, useState } from "react";
import { Markup } from 'interweave';

function App(props) {
  /*const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);*/
  //let k = props.data.news.data;
  //console.log(props.data.news[0].data)
  const [num, setnum] = useState(1);
  const [his, sethis] = useState([])
  const topRef = useRef(null);

  //console.log(props.data.isLoading)
  /*const arr=props.data.news.data;
  let newarr=update(arr,pu)*/
  const trigger = () => {
    if (num < props.data.news.page_total) {
      setnum(curr => curr + 1)
    }
    //console.log(num)
  }

  useEffect(() => {
    console.log(num)
    props.page(num)
    //console.log(l);
  }, [num])

  /*useEffect(() => {
    (async () => {
      const products = await props.page(num)
      sethis([...his, products])
      console.log("hello")
    })()
  }, [])*/

  /*useEffect(() => {
    let mounted = true;
    props.page(num)
      .then(items => {
        if (mounted) {
          sethis(items)
        }
      })
    return () => mounted = false;
  }, [])*/

  /*useEffect(() => {
    //console.log(num)
    k !== undefined ? sethis(his => [...his, k]) : sethis()
    console.log(his)
  },)*/
  /*const getData = () => {
    const requestURL = `https://www.readingright.in/apiservice/article/read/?format=json&user_id=57`;
    const driveRequest = new Request(requestURL, {
      method: "GET",
    });

    return fetch(driveRequest).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw response.status;
    });
  };

  useEffect(() => {
    getData().then((json) => {
      setArticles(json.data);
      setLoading(false);
    });
  }, []);*/

  return (
    <div className="App">
      <div ref={topRef} />
      <NavBar logo={logo} />
      <div className="App-main">
        {props.data.isLoading ? (
          <div className="loader"></div>
        ) : (
          props.data.news.data.map((article) => {
            return (
              <div className="article" key={article.id}>
                <div className="article-likes">👑 {article.art_status}</div>
                <img
                  className="article-cover"
                  src={"https://www.readingright.in/" + article.art_image}
                  alt={article.id}
                />
                <div className="article-covertext">{article.art_head}</div>
                <div className="article-meta">
                  <div className="article-source">📰 The Caravan | {Math.round((new Date() - new Date(article.art_pub_dt)) / (1000 * 60 * 60 * 24 * 7))} Weeks</div>
                  <div className="article-reduced">
                    <div>
                      {article.art_data.replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;|&rsquo;|❓|💡|🔗/gi, "")}
                    </div>
                  </div>
                  <div className="article-tag">Science & Technology</div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {!props.data.isLoading && props.data.news.data.length > 0 && (
        <div className="btn-container" onClick={trigger}>
          <div className="more-btn">View More</div>
        </div>
      )}
      <div className="App-footer">
        <div
          className="top-btn"
          onClick={() => topRef.current.scrollIntoView({ behaviour: "smooth" })}
        >
          <img src={chevronUp} alt="^"></img>
        </div>
        <p> Ⓒ 2020 - 2021 Reading Right. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
