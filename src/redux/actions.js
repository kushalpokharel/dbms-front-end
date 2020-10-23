import * as ActionTypes from './ActionTypes'
import {baseUrl} from './baseurl'

export const fetchCrops = () => (dispatch)=>{
  dispatch(cropsLoading(true));
  return fetch(baseUrl + 'crop')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(crops => dispatch(addCrops(crops)))
    .catch(error => dispatch(cropsFailed(error.message)));
  }

export const cropsLoading = () =>({
  type:ActionTypes.CROPS_LOADING,

});

export const addCrops =(crop)=>({
  type:ActionTypes.ADD_CROPS,
  payload:crop
});

export const cropsFailed = (errmess) =>({
  type: ActionTypes.CROPS_FAILED,
  payload: errmess
});

