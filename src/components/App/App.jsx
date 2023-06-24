import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Home from "./../Home/Home";
import About from "./../About/About";
import Skills from "./../Skills/Skills";
import Projects from "./../Projects/Projects";
import Contact from "./../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import GoHome from "../GoHome/GoHome";

const App = () => {
    return (
        <div>
            <HashRouter>
                <div>
                    <Navbar />
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/skills' component={Skills} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/contact' component={Contact} />
                    <GoHome />
                </div >
            </HashRouter>
        </div>
    );
};

export default App;