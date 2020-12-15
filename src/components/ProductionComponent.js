import React,{useState} from 'react';
import {Table, Jumbotron} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Col, Form, FormGroup, Input} from 'reactstrap';
import AddProductionForm from './AddProductionForm';
import EditProductionForm from './EditProductionForm';

function Production(props)  {

    const [editing,setEditing] = useState(false);
    const [currentProd,setCurrentProduction] = useState({year:'',amount:'',harvest_area:'',crop_name:'',district_name:'',climate:'',ph_value:''})
    const [searchItem,setSearchItem] = useState({searchTerm:''});

    const editDetails = (prod)=>{
        setEditing(true);
        setCurrentProduction({id:prod.id,year:prod.year,amount:prod.amount,harvest_area:prod.harvest_area,crop_name:prod.crop_name,district_name:prod.district_name, ph_value:prod.ph_value, climate:prod.climate});
    }

    const handleInputChange =(e)=>{
        setSearchItem({searchTerm:e.target.value})
        console.log(searchItem.searchTerm)
    }

    // const dynamicSearch = ()=>{

    // }

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
        console.log(searchItem.searchTerm);
        if(prod.district_name.toLowerCase().includes(searchItem.searchTerm) ||
            prod.crop_name.toLowerCase().includes(searchItem.searchTerm) )
            {
                console.log('yes');
                return(
                    <tr key = {ind+1}>
                        
                        <th>{ind+1}</th>
                        <td>{Math.floor(prod.year/100)}-{String(prod.year%100).padStart(2,'0')}</td>
                        <td>{prod.amount}</td>
                        <td>{prod.harvest_area}</td>
                        <td>{prod.crop_name}</td>
                        <td>{prod.district_name}</td>
                        <td>{prod.ph_value}</td>
                        <td>{prod.climate}</td>
                        <td><button onClick={() => editDetails(prod)}>EDIT</button> <button onClick={() => props.delete(prod)}>DELETE</button> </td> 
                    </tr>
                    );
                
            }
        // return(
        //     <br/>
        // ) ;
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
            <div className="row ">
            <div className="col-7 d-flex flex-row p-2">
                <h3>Production</h3>
            </div>
            <div className="col-5 d-flex flex-row-reverse p-3" >
                <Form inline onSubmit ={(event)=>{
                    event.preventDefault();
                }}>
                    <FormGroup>
                        <Input type="text" name = "search" style={{float: "right",padding: "6px", color:"black" ,border:"3px solid"}} placeholder="Search.." value={searchItem.searchTerm} onChange={handleInputChange}/>
                    </FormGroup>
                
                </Form>
            </div>
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
                    <th>Ph value</th>
                    <th>Climate</th>
                    
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