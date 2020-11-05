import * as ActionTypes from './ActionTypes'
import {baseUrl} from './baseurl'
import {Cookies} from 'js-cookie'

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

export const concatCrops =(crop)=>(dispatch)=>{
  // const csrftoken = Cookies.get('x-csrftoken');
  dispatch(cropsLoading(true));
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify({ name: crop.name, crop_type: crop.type })
  };
  return fetch(baseUrl+'crop/',requestOptions)
  .then(response=> {
    console.log(response);
    if(response.ok){
      return response;
    }
    else{
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },
  
    error => {
      var errmess = new Error(error.message);
      throw errmess;
    })
  .then(response =>  response.json())
  .then(data=> dispatch(concatCropshelp(data))) 
  .catch(error=> dispatch(cropsFailed(error.message)))
} 


export const concatCropshelp = (data)=>({
  type:ActionTypes.CONCAT_CROPS,
  payload:data
})

export const cropsFailed = (errmess) =>({
  type: ActionTypes.CROPS_FAILED,
  payload: errmess
});

export const fetchDistricts = () => (dispatch)=>{
  dispatch(districtsLoading(true));
  return fetch(baseUrl + 'district')
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
    .then(crops => dispatch(adddistricts(crops)))
    .catch(error => dispatch(districtsFailed(error.message)));
  }

export const districtsLoading = () =>({
  type:ActionTypes.DISTRICTS_LOADING,

});

export const adddistricts =(crop)=>({
  type:ActionTypes.ADD_DISTRICTS,
  payload:crop
});

export const districtsFailed = (errmess) =>({
  type: ActionTypes.DISTRICTS_FAILED,
  payload: errmess
});

export const fetchProduction = () => (dispatch)=>{
  dispatch(productionLoading(true));
  return fetch(baseUrl + 'production')
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
    .then(crops => dispatch(addproduction(crops)))
    .catch(error => dispatch(productionFailed(error.message)));
  }

export const productionLoading = () =>({
  type:ActionTypes.PRODUCTION_LOADING,

});

export const addproduction =(crop)=>({
  type:ActionTypes.ADD_PRODUCTION,
  payload:crop
});

export const productionFailed = (errmess) =>({
  type: ActionTypes.PRODUCTION_FAILED,
  payload: errmess
});