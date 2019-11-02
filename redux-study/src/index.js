import {createStore} from 'redux';
import reducer  from './reducer';
import {ACT_INC, ACT_DEC} from './actions';

const store = createStore(reducer);
const {dispatch} =store;
  
let inc =document.getElementById('inc');
let dec =document.getElementById('dec');

inc.onclick=()=>{
    store.dispatch(ACT_INC());
};
dec.onclick=()=>{
    store.dispatch(ACT_DEC());
};

const update = () => {
    document.getElementById('counter')
    .innerHTML=store.getState();
}
store.subscribe(update);