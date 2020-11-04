import * as ActionTypes from './ActionTypes';

export const Districts = (state={
  isLoading : true,
  errMess : null,
  districts : []}, action) =>{
    
  switch(action.type){

    case ActionTypes.ADD_DISTRICTS:
      return{...state, isLoading:false, errMess:null, districts:action.payload};
    
    case ActionTypes.DISTRICTS_FAILED:
      return{...state, isLoading:false, errMess:action.payload, districts:[]};

    case ActionTypes.DISTRICTS_LOADING:
      return{...state, isLoading:true, errMess:null, districts:[]};
    
    default :
      return state;
  }
};