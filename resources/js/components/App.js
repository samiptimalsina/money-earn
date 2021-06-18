
import Header from "./pages/Header";
import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Protected from "./Protected";
function App(){

    return(
        <BrowserRouter>
            <Route exact path={["/register",'/']}>
                <Protected  Cmp={Register}/>
            </Route>

            <Route exact path="/login" >
                <Protected  Cmp={Login}/>
            </Route>
            <Route exact path="/home" >
                <Protected exact Cmp={Home}/>
            </Route>
        </BrowserRouter>
    );
}
export  default App;
