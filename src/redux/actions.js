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

export const concatCrops =(crop)=>(dispatch)=>{
  // const csrftoken = Cookies.get('x-csrftoken');
  // dispatch(cropsLoading(true));
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

export const updateCrop = (crop)=>(dispatch)=>{
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify({name: crop.crop.name, crop_type: crop.crop.type })
  };
  console.log(crop.id);
  return fetch(baseUrl+'crop/'+crop.id,requestOptions)
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
  .then(data=> dispatch(updateCropshelp(data))) 
  .catch(error=> dispatch(cropsFailed(error.message)))
}

export const updateCropshelp = (crop)=>({
  type: ActionTypes.UPDATE_CROPS,
  payload: crop
})

export const deleteCrop = (crop)=>(dispatch)=>{
  console.log(crop.id)
  fetch(baseUrl + 'crop/'+crop.id,{method:'DELETE'})
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
    // .then(response => response.json())
    // .then(crop => dispatch(deleteCropshelp(crop)))
    .catch(error => dispatch(cropsFailed(error.message)));
    dispatch(deleteCropshelp(crop));
}

export const deleteCropshelp = (crop)=>({
  type: ActionTypes.DELETE_CROPS,
  payload: crop
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

export const concatProduction =(prod)=>(dispatch)=>{
  // const csrftoken = Cookies.get('x-csrftoken');
  // dispatch(cropsLoading(true));
  console.log('here');
  const requestOptions = {
    mode:'cors',
    method: 'POST',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify({ crop_name: prod.crop_name, district_name: prod.district_name, year:prod.year, amount:prod.amount, ph_value:prod.ph_value, climate:prod.climate, harvest_area:prod.harvest_area}),
    credentials: 'same-origin'
  };
  return fetch(baseUrl+'production/',requestOptions)
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
  .then(data=> dispatch(concatProdshelp(data))) 
  .catch(error=> dispatch(productionFailed(error.message)))
} 


export const concatProdshelp = (data)=>({
  type:ActionTypes.CONCAT_PRODUCTION,
  payload:data
})

export const updateProduction = (prod) => (dispatch)=>{
  const requestOptions = {
    mode:'cors',
    method: 'PUT',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify({id:prod.id, crop_name: prod.prod.crop_name, district_name: prod.prod.district_name, year:prod.prod.year, amount:prod.prod.amount, harvest_area:prod.prod.harvest_area, climate:prod.prod.climate, ph_value:prod.prod.ph_value}),
    credentials: 'same-origin'
  };
  return fetch(baseUrl + 'production/'+prod.id,requestOptions)
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
    .then(response =>  response.json())
    .then(data=> dispatch(updateProdshelp(data)))
    .catch(error => dispatch(productionFailed(error.message)));
   
}

export const updateProdshelp = (data)=>({
  type:ActionTypes.UPDATE_PRODUCTION,
  payload:data
})

export const deleteProduction = (data) => (dispatch)=>{
  console.log(data.crop_name);
  fetch(baseUrl + 'production/'+data.id,{method:'DELETE'})
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
    .then(dispatch(deleteProdshelp(data)))
    .catch(error => dispatch(productionFailed(error.message)));
    
}

export const deleteProdshelp = (data)=>({
  type:ActionTypes.DELETE_PRODUCTION,
  payload:data
})

export const productionFailed = (errmess) =>({
  type: ActionTypes.PRODUCTION_FAILED,
  payload: errmess
});