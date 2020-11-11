import React from 'react';
import {Table,Jumbotron} from 'reactstrap';
import { Loading } from './LoadingComponent';


function District(props)  {
if (props.districts.isLoading) {
        console.log("here");
        return(
            <div className="container">
                <div className="row">          
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.districts.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.districts.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    const distsdata = props.districts.districts.map((dist,ind)=>{
        
        return(
            <tr>
                
                <th>{ind+1}</th>
                <td>{dist.name}</td>
                <td>{dist.area}</td>
                <td>{dist.pradesh_no}</td>
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
                
               
            </div>
            
        </Jumbotron>
        <div className="container">
            <div className="col-12">
            <h3>Districts</h3>
            <hr />
            </div>  
            <Table dark>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Pradesh No.</th>
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

export default District;