import React from "react";
import Jumbotron from "./Jumbotron"
import Search from "./Search"
import Results from "./Results"
import "./Home.css";

const Home = () => (
    
    <div>
        <Jumbotron />
        <container>

        <Search />
        <Results />
        </container>
    </div>
)
    
export default Home;