import {createStore, bindActionCreators} from 'redux';
import reducer  from './reducer';
import {ACT_INC, ACT_DEC} from './actions';

const store = createStore(reducer);
const {dispatch} =store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// };

// const incDispatch = ()=> dispatch(ACT_INC());
// const decDispatch = ()=> dispatch(ACT_DEC());

const {incDispatch, decDispatch} = bindActionCreators({
    incDispatch: ACT_INC,
    decDispatch: ACT_DEC
}, dispatch);
  
let inc =document.getElementById('inc');
let dec =document.getElementById('dec');

inc.addEventListener('click', incDispatch);
// dec.addEventListener('click', decDispatch);
dec.onclick=decDispatch;

const update = () => {
    document.getElementById('counter')
    .innerHTML=store.getState();
}
store.subscribe(update);