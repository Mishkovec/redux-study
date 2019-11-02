import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ACT_DEC, ACT_INC} from '../actions';
import * as actions from '../actions';

const Counter = ({count, inc, dec}) => {
    return (
        <div>
            <h2 >{count}</h2>
            <button onClick={inc}>+1</button>
            <button onClick={dec}>-1</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state
    };
};
const mapDispatchToProps = (dispatch) => {
    const{inc, dec}=bindActionCreators(actions, dispatch);
    return {
        inc:()=> dispatch(ACT_INC()),
        dec: ()=> dispatch(ACT_DEC()),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);