import React from 'react';
import {Table, Jumbotron} from 'reactstrap';
import { Loading } from './LoadingComponent';
import AddProductionForm from './AddProductionForm';
// import EditProductionForm from './EditProductionForm';

function Production(props)  {

    // const [editing,setEditing] = useState(false);
    // const[currentCrop,setCurrentProduction] = useState({id:'',name:'',type:''})

    if (props.production.isLoading) {
        console.log("here");
        return(
            <div className="container">
                <div className="row">          
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.production.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.production.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    const distsdata = props.production.production.map((prod,ind)=>{
        return(
            <tr key = {ind+1}>
                
                <th>{ind+1}</th>
                <td>{prod.year}</td>
                <td>{prod.amount}</td>
                <td>{prod.harvest_area}</td>
                <td>{prod.crop_name}</td>
                <td>{prod.district_name}</td>
                <td><button onClick={() => props.editDetails(prod)}>EDIT</button> <button onClick={() => props.deleteDetails(prod)}>DELETE</button> </td> 
            </tr>
            );
        });
    return(

        <div className="container">
            <div className="col-12">
            <h3>Production</h3>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 ">
                            <h1>Crop Data Repository</h1>
                            <p></p>
                        </div>
                    </div>
                    <div className="row row-header">
                        
                    </div>
                    
                    
                        <AddProductionForm concate = {props.concat}
                                            crops = {props.crops}
                                            districts = {props.districts}
                                                concate = {props.concat}/>
            
                </div>
                
            </Jumbotron>
            <hr />
            </div>  
            <Table dark>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Year</th>
                    <th>Amount</th>
                    <th>Harvest Area</th>
                    <th>Crop</th>
                    <th>District</th>
                    </tr>
                </thead>
                <tbody>
                    {distsdata}
                </tbody>
            </Table>
        </div>
    );
}

export default Production;