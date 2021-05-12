import React from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';
import Nav from "./Components/Nav"
import ReadingListPage from "./Pages/readinglist-page/ReadingListPage";
import LoginPage from "./Pages/login-page/LoginPage";
import SearchPage from "./Pages/search-page/SearchPage";


function App() {
    return (
        <>

            <div className="app-container">

                <div className="App">
                    <Nav/>
                    <Switch>
                        <Route exact path="/">
                            <SearchPage/>
                        </Route>

                        <Route path="/reading-list">
                            <ReadingListPage/>
                        </Route>


                        <Route path="/login">
                            <LoginPage/>
                        </Route>

                    </Switch>
                </div>
            </div>
        </>

    );

}

export default App;
