import React from 'react';
import {Table} from 'reactstrap';
import { Loading } from './LoadingComponent';

function Home(props)  {
if (props.crops.isLoading) {
        console.log("here");
        return(
            <div className="container">
                <div className="row">          
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.crops.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.crops.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    var a = 0
    const cropsdata = props.crops.crops.map(crop=>{
        a++;
        return(
            <tr>
                
                <th>{a}</th>
                <td>{crop.name}</td>
                <td>{crop.crop_type}</td>
            </tr>
            );
        });
    return(

        <div className="container">
            <div className="col-12">
            <h3>Crops</h3>
            <hr />
            </div>  
            <Table dark>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Crop Type</th>
                    </tr>
                </thead>
                <tbody>
                    {cropsdata}
                </tbody>
            </Table>
        </div>
    );
}

export default Home;