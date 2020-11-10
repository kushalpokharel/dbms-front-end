import React, { useState,useEffect } from 'react'
import { Col, Form, FormGroup,Label, Button, Input} from 'reactstrap';


const EditProductionForm = (props) => {
    const initialState = {name:'', type:''}
    const [crop,setCrop] = useState(initialState);
    useEffect(() => {
      setCrop(props.currentCrop)
    }, [props])

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        
        setCrop({...crop,[name]:value})
        console.log(crop);
    }
    // console.log('nwin');

  return (
    <Form inline onSubmit ={(event)=>{
      event.preventDefault();
      alert(crop);
      if(!crop.name || !crop.type)
          return
      props.updateCrop({crop:crop,id:props.currentCrop.id});
      }}>
      <FormGroup>
          <Label>Name</Label>
          <Col sm={4}>
              <Input type="text" name = "name" value={crop.name} defaultValue={props.currentCrop.name} onChange={handleInputChange}/>
          </Col>
      </FormGroup>
      <FormGroup>
          <Label>Crop Type</Label>
          <Col sm={4}>
              <Input type="text" name = "type" value={crop.type} onChange={handleInputChange}/>
          </Col>
      </FormGroup>
      <Button class="add">Edit Crop</Button>
      &nbsp;  &nbsp;
      <Button
        onClick={() => props.setEditing(false)}
        className="button muted-button">
        Cancel
      </Button>
  </Form>
  )
}

export default EditProductionForm