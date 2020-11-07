import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";

class Header extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      isNavOpen:false,
      isModalOpen:false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  Submit(event){
    this.toggleModal();
    console.log(`${this.username.value} ${this.password.value} ${this.remember.checked}`);
    alert(`${this.username.value} ${this.password.value} ${this.remember.checked}`);
    event.preventDefault();
  }

  toggleNav(){
    this.setState({
      isNavOpen:!this.state.isNavOpen
    });
  }

  toggleModal(){
    this.setState({
      isModalOpen:!this.state.isModalOpen
    });
  }

  render() {
    return(
    <React.Fragment>
      <Navbar dark expand='md'>
        <div className="container">
          <NavbarToggler onClick={this.toggleNav}/>
          <NavbarBrand href="/"><img src= "assets/images/logo.png" height='30' width='41'
            alt="Restorante Con Fusion"/></NavbarBrand>
        
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                  <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Crops</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link"  to='/districts'><span className="fa fa-list fa-lg"></span> Districts</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to='/production'><span className="fa fa-info fa-lg"></span> Production</NavLink>
              </NavItem>
              {/* <NavItem>
                  <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
              </NavItem> */}
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.Submit}>
              <FormGroup>
                <Label htmlFor="username" >Username</Label>
                <Input type="text" id="username" name="username"
                  innerRef= {(value) => this.username= value}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password" >Password</Label>
                <Input type="password" id="password" name="password"
                  innerRef= {(value) => this.password= value}/>
              </FormGroup>
              <FormGroup check>
                <Label check >
                <Input type="checkbox" id="remember" name="remember"
                  innerRef= {(value) => this.remember= value}/>Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>
          </ModalBody>
      </Modal>
    </React.Fragment>
    );
  }
}

export default Header;