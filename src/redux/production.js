import * as ActionTypes from './ActionTypes';

export const Production = (state={
  isLoading : true,
  errMess : null,
  production : []}, action) =>{
    
  switch(action.type){

    case ActionTypes.ADD_PRODUCTION:
      return{...state, isLoading:false, errMess:null, production:action.payload};
    
    case ActionTypes.PRODUCTION_FAILED:
      return{...state, isLoading:false, errMess:action.payload, production:[]};

    case ActionTypes.PRODUCTION_LOADING:
      return{...state, isLoading:true, errMess:null, production:[]};
    
    default :
      return state;
  }
};