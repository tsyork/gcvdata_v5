import React from 'react';
import Router from 'react-router';
import routes from './scripts/routes';

//var Router = require('react-router')
//    , RouteHandler = Router.RouteHandler
//    , Route = Router.Route;

var ReactBootstrap = require('react-bootstrap')
    , Nav = ReactBootstrap.Nav
    , ListGroup = ReactBootstrap.ListGroup;

var ReactRouterBootstrap = require('react-router-bootstrap')
    , NavItemLink = ReactRouterBootstrap.NavItemLink
    , ButtonLink = ReactRouterBootstrap.ButtonLink
    , ListGroupItemLink = ReactRouterBootstrap.ListGroupItemLink;

//var App = React.createClass({
//    render: function() {
//        return (
//            <div>
//                NavItemLink<br />
//                <Nav>
//                    <NavItemLink
//                        to="destination"
//                        params={{ someparam: 'hello' }}>
//                        Linky!
//                    </NavItemLink>
//                </Nav>
//                <br />
//                ButtonLink<br />
//                <ButtonLink
//                    to="destination"
//                    params={{ someparam: 'hello' }}>
//                    Linky!
//                </ButtonLink>
//                <br />
//                <ListGroup>
//                    <ListGroupItemLink
//                        to="destination"
//                        params={{ someparam: 'hello' }}>
//                        Linky!
//                    </ListGroupItemLink>
//                </ListGroup>
//                <RouteHandler />
//            </div>
//        );
//    }
//});
//
//var Destination = React.createClass({
//    render: function() {
//        return <div>You made it!</div>;
//    }
//});

//var routes = (
//    <Route handler={App} path="/">
//        <Route name="destination" path="destination/:someparam" handler={Destination} />
//    </Route>
//);

Router.run(routes, Handler => React.render(<Handler foo={3+2} />, document.body));