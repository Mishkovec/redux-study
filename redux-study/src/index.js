import {createStore, bindActionCreators} from 'redux';
import reducer  from './reducer';
// import {ACT_INC, ACT_DEC} from './actions';
import * as actions from './actions';

const store = createStore(reducer);
const {dispatch} =store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// };

// const incDispatch = ()=> dispatch(ACT_INC());
// const decDispatch = ()=> dispatch(ACT_DEC());

const {ACT_INC, ACT_DEC} = bindActionCreators(actions, dispatch);
  
let inc =document.getElementById('inc');
let dec =document.getElementById('dec');

inc.addEventListener('click', ACT_INC);
// dec.addEventListener('click', decDispatch);
dec.onclick=ACT_DEC;

const update = () => {
    document.getElementById('counter')
    .innerHTML=store.getState();
}
store.subscribe(update);