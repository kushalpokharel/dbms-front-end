// import userEvent from '@testing-library/user-event';
import React,{useState} from 'react';
import { Col, Table, Form, FormGroup,Label, Button, Input, Jumbotron} from 'reactstrap';
import { Loading } from './LoadingComponent';

function Home(props)  {

    const initialState = {name:'', type:''}
    const [crop,setCrop] = useState(initialState);

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setCrop({...crop,[name]:value})
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
                
                <th>{index+1}</th>
                <td>{crop.name}</td>
                <td>{crop.crop_type}</td>
                <td><button onClick={() => this.editDetails(crop)}>EDIT</button> <button onClick={() => this.deleteEmployee(crop.id)}>DELETE</button> </td> 
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
                    
                    <Form inline onSubmit ={(event)=>{
                        event.preventDefault();
                        alert(crop);
                        if(!crop.name || !crop.type)
                            return
                        props.concat(crop);
                        }}>
                        <FormGroup>
                            <Label>Name</Label>
                            <Col sm={4}>
                                <Input type="text" name = "name" value={crop.name} onChange={handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label>Crop Type</Label>
                            <Col sm={4}>
                                <Input type="text" name = "type" value={crop.type} onChange={handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <Button class="add">App Crop</Button>
                    </Form>
                
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