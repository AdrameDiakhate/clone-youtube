import {SIGNIN} from '../actions/loginAction';



const initialState={};

const loginReducer=(state=initialState,action)=> {
    switch(action.type){
        case SIGNIN: 
            return action.payload;
        default:
            return state;
    }
}

export default loginReducer;
