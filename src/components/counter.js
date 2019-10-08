import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd}) => {
    return (
        <div className="jambotron">
            <h1 id="counter">{counter}</h1>
            <button id="DEC"
                    onClick={dec}  
                    className="btn btn-primary btn-lg">DEC</button>
            <span>{"      "}</span>
            <button id="INC"
                    onClick={inc}
                    className="btn btn-primary btn-lg">INC</button>
            <span>{"      "}</span>
            <button id="RND"
                    onClick={rnd} 
                    className="btn btn-primary btn-lg">RND</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state,
    };
};

const mapDispatchToProps = (dispatch) => {
   return  bindActionCreators(actions, dispatch);    
};
    

export default connect(mapStateToProps, mapDispatchToProps)(Counter);