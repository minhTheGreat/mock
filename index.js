import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import history from './Config/history';
import { Router, Route, Redirect,Switch } from 'react-router-dom';
import createStore from './reducers/configureStore';
//Component for route
import Home from './views/Home';
import Login from './views/Login';
import  Register  from './views/Register';
import PrivateRoute from './router/PrivateRouter';
import Manager from './views/Manager';
import NotFound from './views/elements/NotFound'




const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div className="App">
                <Switch>
                <Route path="/manager" component={Manager}/>
                <Route exact path="/login" component={Login} />
                <Route path="/register" component={Register}/>
                <Route path='' component={NotFound}/>
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.querySelector("#root")

);

