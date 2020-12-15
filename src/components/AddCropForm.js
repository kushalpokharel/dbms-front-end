import React, { useState } from 'react'
import { Col, Form, FormGroup,Label, Button, Input} from 'reactstrap';


const AddCropForm = (props) => {
    const initialState = {name:'', type:''}
    const [crop,setCrop] = useState(initialState);

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        
        setCrop({...crop,[name]:value})
        console.log(crop);
    }


  return (
    <Form inline onSubmit ={(event)=>{
      event.preventDefault();
      console.log(crop);
      if(!crop.name || !crop.type)
          return
      props.concate(crop);
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

      <FormGroup>
        
        {/* <Input type="file" name="image" id="exampleFile" />  */}
      </FormGroup>
      <Button class="add">Add Crop</Button>
  </Form>
  )
}

export default AddCropForm