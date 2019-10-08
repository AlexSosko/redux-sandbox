import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';

import * as actions from './actions';
import reducer from './reducer';
import Counter from './components/counter';
import App from './components/app';

const store =  createStore(reducer);


    
    ReactDOM.render(
        <Provider store={store} >
            <App />
        </Provider>
        , 
        document.getElementById('root') );
    

// const { dispatch, getState } = store;

// const {inc, dec, rnd } = bindActionCreators(actions , dispatch);

// update();

// store.subscribe(() => {
//     update();
// });


{/* <Counter
            counter={getState()}
            inc={inc}
            dec={dec}
            rnd={ () => {
                const payload = Math.floor(Math.random()*10);
                rnd(payload);
            }}/> */}