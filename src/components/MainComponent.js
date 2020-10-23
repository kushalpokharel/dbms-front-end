import React,{Component} from 'react'
import {connect} from 'react-redux';
import{Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {fetchCrops} from '../redux/actions';

const mapDispatchToProps = dispatch =>{
  return{

    fetchCrops : ()=>{(dispatch(fetchCrops()))},

    // fetchDistricts: () => dispatch(fetchDistricts()),
    // fetchProdution: () => dispatch(fetchProduction()),

   }
}

const mapStateToProps = state => {
  return {
    // district : state.district,
    crops : state.crops,
  }
}

class Main extends Component{
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchCrops();
    alert(this.props.crops);
    // this.props.fetchDistricts();
    // this.props.fetchProduction();
  }

  render(){

    const HomePage = ()=>{
      return(
        <Home crops  = {this.props.crops}
        // <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        // dishesLoading={this.props.dishes.isLoading}
        // dishesErrMess={this.props.dishes.errMess}
        // promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        // promoLoading={this.props.promotions.isLoading}
        // promoErrMess={this.props.promotions.errMess}
        // leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }

    return (
      <div>
        <Header/>
          <Switch>
            <Route path='/home' component={HomePage}/>

            <Redirect to="/home" />
          </Switch>        
        <Footer/>
      </div>
    );
  }
     
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));