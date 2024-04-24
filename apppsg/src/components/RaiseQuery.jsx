import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./RaiseQuery.css";

function RaiseQuery() {
    return (
        <div className="raise-query-page">
            <Navbar />
            <div className="raisequeryform">
                <h1 class="title-page">RAISE A QUERY</h1>
                <form className="queryform">
                    <div className="rowinput">
                        <div className="inputelement">
                            <label for="category">
                                CATEGORY:
                            </label>
                            <select name="category" className="select-option">
                                <option>Lab</option>
                            </select>
                        </div>
                        <div className="inputelement">
                            <label for="category">
                                COMPLAINT:
                            </label>
                            <select name="category" className="select-option">
                                <option>Lab</option>
                            </select>
                        </div>
                    </div>
                    <div className="rowinput">
                        <div className="inputelement">
                            <label for="category">
                                FLOOR:
                            </label>
                            <input type="text" className="type-text"></input>
                        </div>
                        <div className="inputelement">
                            <label for="category">
                                ANY COMMENTS:
                            </label>
                            <input type="text" className="type-text"></input>
                        </div>
                    </div>
                    <div className="rowinput">
                        <div className="inputelement">
                            <label for="category">
                                HALL NUMBER:
                            </label>
                            <input type="text" className="type-text"></input>
                        </div>
                    </div>
                    <button type="submit" className="register-complaint">Register</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default RaiseQuery;