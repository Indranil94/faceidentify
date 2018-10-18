import React from 'react';
import {Component} from 'react';
class Signin extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: "",
			pass: ""/*,
			user: {
				id: "",
				name: "",
				email: "",
				hits: "",
				date: ""
			}*/
		};
	}
	onEmailChange = event =>{
		this.setState({
			email: event.target.value
		});
	}
	onPasswordChange = event =>{
		this.setState({
			pass: event.target.value
		});
	}
	onSubmitButton = event =>{
		fetch('https://tranquil-cliffs-85616.herokuapp.com/signin',{
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.pass
			})
		})
		.then(response=>response.json())
		.then(result=>{
			if(result.id){
				/*this.setState({user:{
					id: result.id,
					name: result.name,
					email: result.email,
					hits: result.hits,
					date: result.date
				}});
				console.log(this.state.user);*/
				this.props.onRouteChange("signedin");
				this.props.onSigninSuccess(result);
			}
		})
		.catch(err=>{
			console.log(err);
		});
	}
	render(props){
		const { onRouteChange } = this.props;
		return(
			  <div className="measure center pa3 shadow2 ba bw1">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="center f4 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input 
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        onChange = {this.onEmailChange}
			        type="email" 
			        name="email-address"
			        id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
			        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        onChange = {this.onPasswordChange}
			        type="password" 
			        name="password"  
			        id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
			      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      onClick={this.onSubmitButton} 
			      type="submit" 
			      value="Sign in" />
			    </div>
			    <div className="lh-copy mt3">
			      <p href="#0" className="center f6 link dim black db pointer" onClick={()=>onRouteChange("register")}>Register</p>
			    </div>
			  </div>

		);
	}
}

export default Signin;