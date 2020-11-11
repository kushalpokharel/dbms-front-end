// import userEvent from '@testing-library/user-event';
import React,{useState} from 'react';
import {  Table, Jumbotron} from 'reactstrap';
import { Loading } from './LoadingComponent';
import AddCropForm from './AddCropForm';
import EditCropForm from './EditCropForm';

function Home(props)  {

    const [editing,setEditing] = useState(false);
    const[currentCrop,setCurrentCrop] = useState({id:'',name:'',type:''})

    const editDetails = (crop)=>{
        setEditing(true);

        setCurrentCrop({id: crop.id, name:crop.name,type:crop.crop_type});
    
    }

    const deleteDetails = (crop)=>{
        props.deleteCrop(crop);
    }

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
    const cropsdata = props.crops.crops.map((crop,index)=>{
        return(
            <tr key = {index+1}>
                
                <th>{crop.id}</th>
                <td>{crop.name}</td>
                <td>{crop.crop_type}</td>
                <td><button onClick={() => editDetails(crop)}>EDIT</button> <button onClick={() => deleteDetails(crop)}>DELETE</button> </td> 
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
                        <EditCropForm crops = {props.crops}
                            setEditing={setEditing}
                        currentCrop={currentCrop}
                        updateCrop={props.updateCrop} />:
                        <AddCropForm concate = {props.concat}/>
                    }
                </div>
                
            </Jumbotron>
        <div className = "container">
            <div className ="row">
                <div className="col-12">
                    <h3>Crops</h3>
                </div>  
                
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
    </div>
    );
}

export default Home;