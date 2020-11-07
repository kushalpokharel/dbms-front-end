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
      return{...state, isLoading:false, errMess:null, crops:state.crops.concat(action.payload)};

    case ActionTypes.UPDATE_CROPS:
      return{...state, isLoading:false, errMess:null, crops:state.crops.map((crop)=> crop.id===action.payload.id?action.payload:crop)};
      
    case ActionTypes.DELETE_CROPS:
      return{...state, isLoading:false, errMess:null, crops:state.crops.filter((crop)=> crop.id!==action.payload.id)};
      
    default :
      return state;
  }
};