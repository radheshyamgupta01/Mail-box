import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Component/Header/Header";

import MainContentArea from "./Component/Sidebar/MainContentArea";
import Sign from "./Component/Auth/Sign";
import AllMailBoxComponent from "./Component/Sidebar/MoreOption/AllMailBoxComponent";
import MainContent from "./Component/Sidebar/MainContent";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="app-container">
          <Route path="/" exact>
            <Sign></Sign>
          </Route>
          <Route path="/mainPage">
            <Header></Header>
            <MainContentArea></MainContentArea>
          </Route>
          <Route path="/openmail/:id">
            <AllMailBoxComponent />
          </Route>
          <Route path="/main">
<MainContent></MainContent>
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
