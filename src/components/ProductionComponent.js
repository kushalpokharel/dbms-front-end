import React,{useState} from 'react';
import {Table, Jumbotron} from 'reactstrap';
import { Loading } from './LoadingComponent';
import AddProductionForm from './AddProductionForm';
import EditProductionForm from './EditProductionForm';

function Production(props)  {

    const [editing,setEditing] = useState(false);
    const[currentProd,setCurrentProduction] = useState({year:'',amount:'',harvest_area:'',crop_name:'',district_name:''})

    const editDetails = (prod)=>{
        setEditing(true);
        setCurrentProduction({id:prod.id,year:prod.year,amount:prod.amount,harvest_area:prod.harvest_area,crop_name:prod.crop_name,district_name:prod.district_name});
    }

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
                <td>{Math.floor(prod.year/100)}-{String(prod.year%100).padStart(2,'0')}</td>
                <td>{prod.amount}</td>
                <td>{prod.harvest_area}</td>
                <td>{prod.crop_name}</td>
                <td>{prod.district_name}</td>
                <td><button onClick={() => editDetails(prod)}>EDIT</button> <button onClick={() => props.delete(prod)}>DELETE</button> </td> 
            </tr>
            );
        });
    return(
    <div>
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
            {editing?
            <EditProductionForm crops = {props.crops}
                districts = {props.districts}   
                setEditing={setEditing}
                currentProd={currentProd}
                update={props.update} />:

            <AddProductionForm concate = {props.concat}
                crops = {props.crops}
                districts = {props.districts}/>
        }
            
                
    
        </div>
        
    </Jumbotron>
    
        <div className="container">
            <div className="col-12">
            <h3>Production</h3>
           
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
    </div>
    );
}

export default Production;