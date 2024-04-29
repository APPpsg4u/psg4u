import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./SuggestForm.css";

function SuggestForm() {
    return (
        <div className="suggest-form-page">
            <nav className="raiseQueryBar">
                <img src="/images/logo_psg4u.png" alt="psg4u logo" className="logo-events-page" />
                <div className="nav-list-raise-query">
                    <div className="nav">
                        <img src="/images/homelogo.png" className="logo-events" alt="homelogo" />
                        <a href="#home"><Link to={'/main'} class='link'>Home</Link></a>
                    </div>
                    <div className="nav">
                        <img src="/images/suggestlogo.png" className="logo-events" alt="suggestlogo" />
                        <a href="#home"><Link to={'/suggest'} class='link'>Suggest</Link></a>
                    </div>
                    <button className="logout-button">Logout</button>
                </div>
            </nav>
            <div className="suggestform">
                <h1 class="title-page">LEVEL-UP-LINKS</h1>
                <form className="queryform">
                    <div className="inputelement">
                        <label for="category">
                            SUBJECT:
                        </label>
                        <select name="category" className="select-option">
                            <option>Lab</option>
                        </select>
                    </div>
                    <div className="inputelement">
                        <label for="category">
                            RESOURCE:
                        </label>
                        <input type="text" className="type-text"></input>
                    </div>
                    <div className="inputelement">
                        <label for="category">
                            ANY ATTACHMENT:
                        </label>
                        <input type="text" className="type-text"></input>
                    </div>
                    <div className="inputelement">
                        <label for="category">
                            YOUR NAME(OPTIONAL):
                        </label>
                        <input type="text" className="type-text"></input>
                    </div>
                    <button type="submit" className="submit-suggestion"><Link to={'/reward'}>Submit</Link></button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default SuggestForm;