import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from 'redux';
import reducer  from './reducer';
import * as actions from './actions';
import Counter from './counterBTNS';


const store = createStore(reducer);
const {dispatch} =store;

const {ACT_INC, ACT_DEC} = bindActionCreators(actions, dispatch);
  

const update = () => {
    ReactDOM.render(
        <Counter
            count={store.getState()}
            inc={ACT_INC}
            dec={ACT_DEC}
        />, 
        document.getElementById('root')
    );
}
update();
store.subscribe(update);

