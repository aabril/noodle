import React, {Component} from "react";
import {createStore} from "redux";
import Link from 'next/link'
import withRedux from "next-redux-wrapper";
import LayoutMain from '../layouts/main'
import {Row, Col} from 'react-materialize'


const reducer = (state = {foo: ''}, action) => {
    switch (action.type) {
        case 'FOO':
            return {...state, foo: action.payload};
        default:
            return state
    }
};

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (if any)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
const makeStore = (initialState, options) => {
    return createStore(reducer, initialState)
};

class Page extends Component {
    static getInitialProps({store, isServer, pathname, query}) {
        store.dispatch({type: 'FOO', payload: 'foo'}); // component will be able to read from store's state when rendered
        return {custom: 'custom'}; // you can pass some custom props to component from here
    }
    render() {
        return (
            <LayoutMain>
                <Row>
                    <Col s={12} className='grid-example'>
                        <div>
                            <div className='title'>Home</div>
                            <img src='/static/noodle_logo2.jpg'/>
                            <div>Prop from Redux {this.props.foo}</div>
                            <div>Prop from getInitialProps {this.props.custom}</div>
                            <Link href="/about">
                                <a>Link to About</a>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </LayoutMain>
        )
    }
}

Page = withRedux(makeStore, (state) => ({foo: state.foo}))(Page)

export default Page