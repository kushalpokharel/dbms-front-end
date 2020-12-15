import React, { useState,useEffect } from 'react'
import { Col, Form, FormGroup,Label, Button, Input} from 'reactstrap';


const EditProductionForm = (props) => {
    const initialState = {year:'',amount:'',harvest_area:'',crop_name:'',district_name:'',climate:'',ph_value:''}
    const [prod,setProduction] = useState(initialState);
    
    useEffect(() => {
      setProduction(props.currentProd)
    }, [props])

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        
        setProduction({...prod,[name]:value})
        console.log(prod);
    }
    // console.log('nwin');
    const crops_opt = props.crops.crops.map((crop,ind) => {
      return (
        <option key = {ind+1}>{crop.name}</option>
      )
    });

    const districts_opt = props.districts.districts.map((dist,ind)=>{
      return(
        <option key = {ind+1}>{dist.name}</option>
      )
    })
    const phopt = []
    for(var i=0; i<14;i++){
      phopt.push({"val": i+1})
    }
    const ph_opt = phopt.map((ph,ind)=>{
      return(
        <option key = {ind+1}>{ph["val"]}</option>
      )
    })

  return (
    <Form inline onSubmit ={(event)=>{
      event.preventDefault();
      
      if(!prod.district_name || !prod.crop_name)
          return
      console.log(prod)
      if(window.confirm('Are you sure?'))
        props.update({prod:prod,id:props.currentProd.id});
      }}>
      <FormGroup>
          <Label>Year</Label>
          <Col sm={4}>
              <Input type="text" name = "year" value={prod.year} defaultValue={props.currentProd.year} onChange={handleInputChange}/>
          </Col>
      </FormGroup>
      <FormGroup>
          <Label>Amount</Label>
          <Col sm={4}>
              <Input type="text" name = "amount" value={prod.amount} defaultValue={props.currentProd.amount} onChange={handleInputChange}/>
          </Col>
      </FormGroup>

      <FormGroup>
          <Label>Crop</Label>
          <Col sm={4}>
              <Input type="select" name = "crop_name" value={prod.crop_name} onChange={handleInputChange}>
                {crops_opt}
              </Input>
          </Col>
      </FormGroup>

      <FormGroup>
        <Label>District</Label>
        <Col sm={4}>
        <Input type="select" name = "district_name" value={prod.district_name} onChange={handleInputChange}>
              {districts_opt}
        </Input>
        </Col>
      </FormGroup>

      <FormGroup>
        <Label>Area</Label>
        <Col sm={4}>
            <Input type="text" name = "harvest_area" value={prod.harvest_area} defaultValue={props.currentProd.harvest_area} onChange={handleInputChange}/>
        </Col>
      </FormGroup>
      <FormGroup>
              <Label>Climate</Label>
              <Col sm={4}>
              <Input type="text" name = "climate" value={prod.climate} defaultValue={props.currentProd.climate} onChange={handleInputChange}/>
              </Col>
      </FormGroup>
      <FormGroup>
          <Label>pH....</Label>
          <Col sm={4}>
          <Input type="select" name = "ph_value" value={prod.ph_value} onChange={handleInputChange}>
              {ph_opt}
        </Input>
        </Col>
      </FormGroup>

      <Button class="edit">Edit </Button>
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