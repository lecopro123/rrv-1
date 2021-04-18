import "./App.scss";
import chevronUp from "../assets/up-chevron.svg";
import { useEffect, useRef, useState } from "react";
import { Route, withRouter } from "react-router-dom";
import Coin from '../assets/coin.svg';
import tag from '../assets/tag.svg';
import paper from '../assets/paper.svg';
import Fade from 'react-reveal/Fade';

function AppCat(props) {
    const [num, setnum] = useState(1);
    const topRef = useRef(null);

    const trigger = () => {
        if (num < props.data.catNews.page_total) {
            setnum(num => num + 1)
        }
    };

    useEffect(() => {
        //console.log("hi")
        if (props.location.state !== undefined) { props.pages(props.location.state.det) }
    }, [props.location.state.det])

    return (
        <div className="App">
            <div ref={topRef} />
            <div className="App-main">
                {props.data.isLoading ? (
                    <div className="loader"></div>
                ) : (
                    props.data.catNews.data.map(article => {
                        return (
                            <Fade left>
                                <div className="article" key={article.id}>
                                    <div className="cover-container">
                                        <img
                                            loading="lazy"
                                            className="article-cover"
                                            src={"https://www.readingright.in/" + article.art_image}
                                            alt={article.id}
                                        />
                                        <div className="article-likes"><img src={Coin} alt="C" /> {article.art_status}</div>
                                        <div className="article-covertext">{article.art_head}</div>
                                    </div>
                                    <div className="article-meta">
                                        <div className="article-source">
                                            <img src={paper} alt="p" /> {article.source.name} |{" "}
                                            {Math.round(
                                                (new Date() - new Date(article.art_pub_dt)) /
                                                (1000 * 60 * 60 * 24 * 7)
                                            )}{" "} Weeks
                                    </div>
                                        <div className="article-reduced">
                                            <div>
                                                {article.art_data
                                                    .replace(/(<([^>]+)>)/gi, "")
                                                    .replace(/&nbsp;|&rsquo;|❓|💡|🔗/gi, "")}
                                            </div>
                                        </div>
                                        {/*<div className="article-tag"><img src={tag} alt="t" /> {article.category} </div>*/}
                                    </div>
                                </div>
                            </Fade>
                        );
                    })
                )}
            </div>
            {!props.data.isLoading && props.data.catNews.data.length > 0 && num < 3 && (
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

export default withRouter(AppCat);
