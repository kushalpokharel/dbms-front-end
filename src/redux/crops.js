import * as ActionTypes from './ActionTypes';

export const Crops = (state={
  isLoading : true,
  errMess : null,
  crops : []}, action) =>{
    
  switch(action.type){

    case ActionTypes.ADD_CROPS:
      return{...state, isLoading:false, errMess:null, crops:action.payload};
    
    case ActionTypes.CROPS_FAILED:
      return{...state, isLoading:false, errMess:action.payload, crops:[]};

    case ActionTypes.CROPS_LOADING:
      return{...state, isLoading:true, errMess:null, crops:[]};
    
    case ActionTypes.CONCAT_CROPS:
      return{...state, isLoading:false, errMess:null, crops:{...state,crops: state.crops.concat(state.action.payload)}};

    default :
      return state;
  }
};