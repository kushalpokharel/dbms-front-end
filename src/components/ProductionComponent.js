import React from 'react';
import {Table} from 'reactstrap';
import { Loading } from './LoadingComponent';


function Production(props)  {
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
                <td>{prod.crop}</td>
                <td>{prod.district}</td>
            </tr>
            );
        });
    return(

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
    );
}

export default Production;