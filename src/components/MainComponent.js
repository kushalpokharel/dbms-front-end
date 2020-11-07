import React,{Component} from 'react'
import {connect} from 'react-redux';
import{Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Home from './HomeComponent';
import District from './DistrictComponent';
import Production from './ProductionComponent';
import Header from './HeaderComponent';
import {fetchCrops,fetchDistricts,fetchProduction,concatCrops,updateCrop,deleteCrop} from '../redux/actions';


const mapDispatchToProps = dispatch =>{
  return{

    fetchCrops : ()=>{(dispatch(fetchCrops()))},

    fetchDistricts: () => dispatch(fetchDistricts()),
    
    fetchProduction: () => dispatch(fetchProduction()),

    concatCrops: (crop)=>dispatch(concatCrops(crop)),

    updateCrop : (crop)=>dispatch(updateCrop(crop)),

    deleteCrop: (crop)=>dispatch(deleteCrop(crop)),
   }
}

const mapStateToProps = state => {
  return {
    district : state.districts,
    crops : state.crops,
    production : state.production
  }
}

class Main extends Component{
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchCrops();
    // alert(this.props.crops);
    this.props.fetchDistricts();
    // alert(this.props.district);
    this.props.fetchProduction();
  }

  render(){

    const HomePage = ()=>{
      return(
        <Home crops  = {this.props.crops} 
              concat = {this.props.concatCrops}
              updateCrop = {this.props.updateCrop}
              deleteCrop = {this.props.deleteCrop}/>
      )
    }

    const DistPage = ()=>{
      return(
        <District districts  = {this.props.district}/>
      )
    }

    const ProdPage = ()=>{
      return(
        <Production production = {this.props.production}/>

      )
    }
    
    return (
      <div>
        <Header/>
          <Switch>
            <Route path='/home' component={HomePage}/>
            <Route path='/districts' component={DistPage}/>
            <Route path='/production' component={ProdPage}/>
            <Redirect to="/home" />
          </Switch>        
      </div>
    );
  }
     
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));