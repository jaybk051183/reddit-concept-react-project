import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {ReactComponent as BackIcon} from "../../assets/back.svg";
import Header from "../../components/header/Header";
import "./Subreddit.css"

function Subreddit() {
    const [details, setDetails]=useState({});
    const { id } = useParams();

    useEffect(()=>{
        async function fetchData() {
            try{
                const response= await axios.get(`https://www.reddit.com/r/${id}/about.json`);
                console.log(response.data);
                setDetails(response.data.data);
            }
            catch (e) {
                console.error()
            }
        }
        fetchData();
        }
        ,[id]);

    return (
        <>
            <Header>
                <h1>r/{id}</h1>
                <h4>Subreddit specifications</h4>
            </Header>
            <main>
                <section className="outer-content-container subreddit-specifications">
                    <div className="inner-content-container">
                        {Object.keys(details).length > 0 && (
                            <div className="subreddit-specification-details">
                            <h3>Title</h3>
                            <p>{details.title}</p>
                            <h3>Description</h3>
                            <p>{details.public_description}</p>
                                <h3>Number of subscribers</h3>
                                <p>{details.subscribers}</p>

                            <span className="back-link-wrapper">
                            <BackIcon className="back-icon"/>
                            <Link to="/">Take me back</Link>
                            </span>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Subreddit;


//9. Make an API call to fetch data about a specifick subreddit:GET https://www.reddit.com/r/{SUBREDDIT-HIER}/about.json
//10. UseParams() hook should be used to allow dynamic parameters {id} to be injected in the fetched url as this url will be dynamic.
//Where?: in the main Function
//How?: 1. place UseParams in a variable with the dymanic parameter {id}/ 2. import it from react-router-dom / 3. use template literals ${} in the url to inject dynamic data.
//12. Place the async function in a UseEffect hook and give it a dependency with an empty array.
//13.import the .svg format as Reactcomponent to use in the return of the main function:
//14. import the header component
//15. Set up the main html structure which will be returned.
//16. In your <Header> component you want to add a <h1> with the r/{id} dynamic parameter. Secondly, a <h4> element with subreddit specifications.
//17. In your <main> component you want to have a main <section> element containing a main <div> element.
//18. In you main <div> you want to have the following elements:
/*<h3>Title</h3>
<p>{details.title}</p>
<h3>Description</h3>
<p>{details.public_description}</p>
<h3>Number of subscribers</h3>
<p>{details.subscribers}</p>
<span className="back-link-wrapper">
                  <BackIcon className="back-icon"/>
                  <Link to="/">Take me back</Link>
</span>*/

//19. Provide the section element with a classname for allowing CSS styling.
//20. Provide the main div element with a classname for allowing CSS styling.
//21. Within the main div you want to put a conditional rendering to check if the object received from the API call has a value length > 0  and if so then return the second div element with the h3,p and span elements.
  //The conditional rendering should check if the object received if it's keys has a value. The Object.keys method should have a parameter.
//22. Provide the span & BackIcon(component) element a classname to allow CSS styling.




