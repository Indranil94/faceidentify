import React from 'react';
import {Component} from 'react';

class Register extends Component{

	constructor(props){
		super(props);
		this.state = {
			name : "",
			email: "",
			password: ""
		}
	}
	onEmailChange = (event)=>{
		this.setState({
			email: event.target.value
		})
	}
	onPasswordChange = (event)=>{
		this.setState({
			password: event.target.value
		})
	}	
	onNameChange = (event)=>{
		this.setState({
			name: event.target.value
		})
	}
	onSubmitClick=(event)=>{
		fetch('https://tranquil-cliffs-85616.herokuapp.com/register',{
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response=>response.json())
		.then(result=>{
			if(result === "Successfully registered"){
				this.props.onRouteChange("signin")
			}
		})
	}

	render(){
		return(
			
			  <div className= "measure center pa3 shadow2 ba bw1">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
			      <div className="mt3">
			        <label className="db fw4 lh-copy f6" htmlFor="text">Name</label> 
			        <input className="pa2 input-reset ba bg-transparent w-100 measure" 
			        type="text" 
			        name="name"  
			        id="name"
			        onChange = {this.onNameChange} />
			      </div>
			      <div className="mt3">
			        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label> 
			        <input className="pa2 input-reset ba bg-transparent w-100 measure" 
			        type="email" 
			        name="email-address"  
			        id="email-address" 
			        onChange = {this.onEmailChange}/>
			      </div>
			      <div className="mt3">
			        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent" 
			        type="password" 
			        name="password" 
			        id="password"
			        onChange = {this.onPasswordChange} />
			      </div>
			    </fieldset>
			    <div className="mt3">
			    	<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer  center f6" 
			    	type="submit" 
			    	value="Sign Up" 
			    	onClick={this.onSubmitClick} /></div>
			  </div>
			);
	}
}

export default Register;