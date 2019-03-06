import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import history from './Config/history';
import { Router, Route, Redirect,Switch } from 'react-router-dom';
import createStore from './reducers/configureStore';
//Component for route
import Header from './components/Header';
import Home from './views/Home';
import Login from './views/Login';
import  Register  from './views/Register';
import PrivateRoute from './router/PrivateRouter';
import Manager from './views/Manager';




const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div className="App">
                <Header />
                <Switch>
                <PrivateRoute exact path="/" component={Home}/>
                <Route path="/manager" component={Manager}/>
                <Route exact path="/login" component={Login} />
                <Route path="/register" component={Register}/>
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.querySelector("#root")

);

