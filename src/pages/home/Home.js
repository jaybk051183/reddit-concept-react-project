import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import logo from"../../assets/logo.png";
import "./Home.css"

// 6. Fetch data from API with async and try/catch block and put this async function in a UseEffect hook with an empty array as dependency. This needs to be in the main function.

function Home() {
    //7. Create a state for the reddits and import useEffect and useState from react. Set the initial state as an empty array.

    const [reddits, setReddits] = useState([]);

    useEffect(()=> {
            async function fetchData() {
                try {
                    const result = await axios.get(`https://www.reddit.com/hot.json?limit=15`)
                    console.log(result.data);
                    setReddits(result.data.data.children)
                } catch (e) {
                    console.error(e)
                }
            }
            fetchData();
        }
    , [])

    return (
        <>
            <Header>
                <img src={logo} alt="Reddit logo"/>
                <h1>Reddit</h1>
            </Header>
            <main>
                <section className="outer-content-container hottest-posts">
                    <div className="inner-content-container">
                        <h2>Hottest posts</h2>
                        <h4>on Reddit right now</h4>
                        <div className="subreddit-article-container">
                            {reddits.map((reddit) => {
                                return(
                                    <article className="subreddit-article" key={reddit.data.id}>

                                        <a href={reddit.data.url} className="subreddit-article-title-link">
                                            <h3>{reddit.data.title}</h3>
                                        </a>

                                        <span>
                                            <p><Link to={`/subreddit/${reddit.data.subreddit}`}>{reddit.data.subreddit_name_prefixed}</Link></p>
                                            <p>Comments {reddit.data.num_comments} - Ups {reddit.data.ups}</p>
                                        </span>

                                    </article>
                                    )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
}

export default Home;

/* // 8. Verify what HTML elements need to be returned in the homepage:
         // You want to return a <Header/> component next to the <main/> component.
         //Within the <main/> element you want to have a <section/> element.
        //Within the <section/> element you want to have a <div/> element.
        //Within the main <div/> element you want to have:
          // a <h2> element.
          // a <h4> element.
          // another <div/> which includes a map method on the state (reddits). The map method will be part of conditional rendering and will return the following an <article> element with the following: (Please not to give the article element a key otherwise the browser will hav errors.)
            // <a href="link"/> element which is a link to be used for an external website. Otherwise <link> could be used. The href should contain the url fetched from the API call containing the parameter given in the map method: {reddit.data.url
              //Within the <a><a/> element you want to have <h3> element with the title as dynamic data {reddit.data.title}.
           // Below the <a/> element you want to have two <p> elements wrapped in a <span> element of which:
              // The first one contains a <link> element with dynamic data.
                 //1. Dynamic data as attribute of the <link> element in order to target the subreddit data from the API call Link to={`/subreddit/${reddit.data.subreddit}`}> and
                 //2. Dynamic data which display the name of the subreddit. {reddit.data.subreddit_name_prefixed}
             // The second one contains the string "Comments"  followed by dynamic data {reddit.data.num_comments} - and the string "Ups" {reddit.data.ups}*/

