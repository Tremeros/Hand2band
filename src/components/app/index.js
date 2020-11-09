import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from '../main';
import {Gallery} from '../gallery';
import { Provider } from "react-redux";
import store from "../../store";




const App = () => {

    return (
        <Provider store={store}>
            <div className='container'>
            <Router>
                <Route exact path="/" component={Main}/>
                <Route path="/gallery" component={Gallery}/>
            </Router>
            </div>
        </Provider>
    )
}

export default App;