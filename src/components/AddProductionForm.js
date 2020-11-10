import React, { useState } from 'react'
import { Col,Row, Form, FormGroup,Label, Button, Input} from 'reactstrap';


const AddProductionForm = (props) => {
  var initcrop='',initdist=''
  if(!props.crops.isLoading)
    initcrop = props.crops.crops[0]
  if(!props.districts.isLoading)
    initdist = props.districts.districts[0]
    const initialState = {crop_name:initcrop.name, district_name:initdist.name, year:'' ,amount:'', harvest_area:''}
    const [production,setProduction] = useState(initialState);

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        
        setProduction({...production,[name]:value})
        console.log(production);
    }
    const crops_opt = props.crops.crops.map(crop => {
      return (
        <option>{crop.name}</option>
      )
    });

    const districts_opt = props.districts.districts.map(dist=>{
      return(
        <option>{dist.name}</option>
      )
    })

  return (
    <Form inline className = "margin-bottom-5" onSubmit ={(event)=>{
      event.preventDefault();
      console.log(production);
      // if(!production. || !production.type)
      //     return
      props.concate(production);
      }}>
          <FormGroup>
              <Label>Year</Label>
              <Col sm={4}>
                  <Input type="text" name = "year" value={production.year} onChange={handleInputChange}/>
              </Col>
          </FormGroup>

          <FormGroup>
              <Label>Amount</Label>
              <Col sm={4}>
                  <Input type="text" name = "amount" value={production.amount} onChange={handleInputChange}/>
              </Col>
          </FormGroup>

          <FormGroup>
              <Label>Crop</Label>
              <Col sm={4}>
                  <Input type="select" name = "crop_name" value={production.crop_name} onChange={handleInputChange}>
                    {crops_opt}
                  </Input>
              </Col>
          </FormGroup>

          <FormGroup>
              <Label>District</Label>
              <Col sm={4}>
              <Input type="select" name = "district_name" value={production.district_name} onChange={handleInputChange}>
                    {districts_opt}
              </Input>
              </Col>
          </FormGroup>

          <FormGroup>
              <Label>Area</Label>
              <Col sm={4}>
                  <Input type="text" name = "harvest_area" value={production.harvest_area} onChange={handleInputChange}/>
              </Col>
          </FormGroup>
      <Button class="add">Add</Button>
  </Form>
  )
}

export default AddProductionForm