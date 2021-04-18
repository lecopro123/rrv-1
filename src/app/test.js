import React, { useState, useEffect, useRef } from 'react';
import "./App.scss";
import chevronUp from "../assets/up-chevron.svg";
import Coin from '../assets/coin.svg';
import tag from '../assets/tag.svg';
import paper from '../assets/paper.svg';
import Fade from 'react-reveal/Fade';
import Details from '../app/det';
//import useBoundingClientRect from "@wbe/use-window-size";



const Test = (props) => {
    const topRef = useRef(null)
    const el = useRef();
    // get ref properties
    const [but, setbut] = useState(false);
    const [top, settop] = useState('');
    //const refRect = useBoundingClientRect(rootRef);
    //console.log(props)

    function clciks(e) {
        console.log(e.target)
        //setbut(e.target.dataset)
        //  var k = document.getElementsByTagName("button")
        //  var rect = k.getBoundingClientRect();
        e.target.setAttribute("data-meaning", unescape(e.target.dataset.meaning))
        //e.target.setAttribute("data-image", ":url(" + e.target.dataset.image + ")")
        //e.target.setAttribute("top",el.current.getBoundingClientRect().top + 'px')
        //console.log(e.target.getAttribute("type").getClientReacts().left)
        //useRect(e.target))
        //console.log(rect.left)
        if (e.target.dataset.image !== "") {
            var img = e.target.dataset.image.split(",")
            console.log(img)
            img.map((img, i) => e.target.setAttribute("img" + String(i), "--bg-img:url(" + img + ")"))
        }
        if (!el) return;

        //console.log(el.current.getBoundingClientRect().width);
        /*setTimeout(() => {
            // usually prints a value that is larger than the second console.log
            console.log("way later", el.getBoundingClientRect().width);
        }, 1000);*/
        e.target.setAttribute("top", el.current.getBoundingClientRect().top + 'px')
        e.target.setAttribute("left", el.current.getBoundingClientRect().right + 'px')
        //settop(el.current.getBoundingClientRect().top + 'px');
        console.log(el.current.getBoundingClientRect())
    }
    useEffect(() => {
        console.log(but.title)
    }, [but])
    return (
        <div className="App">
            <div ref={topRef} />
            <div className="App-main">
                {props.data.isLoading ? (
                    <div className="loader"></div>
                ) : (
                    props.data.newi.data.map(article => {
                        return (
                            <Fade left>
                                <div className="article" key={article.id}>
                                    <div className="cover-container">
                                        <img
                                            className="article-cover"
                                            src={"https://www.readingright.in/" + article.art_image}
                                            alt={article.id}
                                        />
                                        <div className="article-likes"><img src={Coin} alt="C1" /> {article.art_status}</div>
                                        <div className="article-covertext">{article.art_head}</div>
                                    </div>
                                    <div className="article-meta">
                                        <div className="article-source">
                                            <img src={paper} alt="p1" /> {article.source.name} |{" "}
                                            {Math.round(
                                                (new Date() - new Date(article.art_pub_dt)) /
                                                (1000 * 60 * 60 * 24 * 7)
                                            )}{" "}
                                                Weeks
                                        </div>
                                        <div style={{ textAlign: 'center' }} >
                                            {<div dangerouslySetInnerHTML={{
                                                __html: article.art_data
                                            }} onClick={clciks} ref={el} >
                                            </div>}
                                        </div>
                                        <div className="article-tag"><img src={tag} alt="t1" /> {article.category}</div>
                                    </div>
                                </div>
                            </Fade>
                        );
                    })
                )}
            </div>
            <Details />
            {/*!props.data.isLoading && props.data.news.data.length > 0 && num < 3 && (
                <div className="btn-container" onClick={trigger}>
                    <div className="more-btn">View More</div>
                </div>
            )*/}
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
    )
}
export default Test