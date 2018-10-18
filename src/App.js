import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/logo';
import Imageinput from './Components/Input/imageInput';
import Imageoutput from './Components/Output/imageOutput';
import Signin from './Components/Signin/signin';
import Rank from './Components/Rank/rank.js';
import Register from './Components/Register/register';
import Particles from 'react-particles-js';

import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: 'signin',
      user: {
      id: "",
      name: "",
      email: "",
      hits: "",
      date: ""}
    };
  }

  onInputChange = (event) =>{
    this.setState( {input: event.target.value} );
  }
  onSigninSuccess = (result) =>{
  	this.setState({
  		user: {
  				id: result.id,
				name: result.name,
				email: result.email,
				hits: result.hits,
				date: result.date
		}
  	})
  }
  onButtonClick = () =>{
  	//change this to do on server side
  	//in server side only keep api fetch calls not on browser
    this.setState({imageUrl: this.state.input},()=>{
      const image = document.getElementById("imageop");
      /*clar_app.models.predict("a403429f2ddf4b49b307e318f00e528b",this.state.imageUrl)
      .then(response=> {
			const data = response.outputs[0].data.regions[0].region_info.bounding_box;*/
      fetch("https://tranquil-cliffs-85616.herokuapp.com/api",{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            imageUrl: this.state.imageUrl
          })
        })
      .then(val=>val.json())
      .then(data=>{
			//const image = document.getElementById("imageop");
  			const boxState = {
  			  top: Number(data.top_row)*image.height,
  			  bottom: (1-Number(data.bottom_row))*image.height,
  			  left: Number(data.left_col)*image.width,
  			  right: (1-Number(data.right_col))*image.width
  			};
  			this.setState({box : boxState});
  			fetch("https://tranquil-cliffs-85616.herokuapp.com/image",{
  				method: 'put',
  				headers: {'Content-Type':'application/json'},
  				body: JSON.stringify({
  					id: this.state.user.id
  				})
  			})
  			.then(resp=>resp.json())
  			.then(result=>{
  				if(result !== 'Bad Login'){
  					this.onSigninSuccess(result);
  				}
  			})
      })
      .catch(err=>{
        console.log(err);
      });
    });
  }
  onRouteChange = (changedRoute) =>{
  	this.setState({route: changedRoute});
    if(changedRoute === 'signin'){
      this.setState({
        input: "",
        imageUrl: "",
        box: {},
        route: 'signin',
        user: {
        id: "",
        name: "",
        email: "",
        hits: "",
        date: ""}
      })
    }
  }
  render() {
    return (
      <div>
        <Particles className = "particle" params={{
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }
              }}
        />
        <Navigation onRouteChange= {this.onRouteChange} route={this.state.route} />
        { (this.state.route === 'signin')?
        	<Signin onRouteChange= {this.onRouteChange} onSigninSuccess = {this.onSigninSuccess}/>:(
        		(this.state.route === 'register')?
        			<Register onRouteChange= {this.onRouteChange}/>:
        			    <div>
        			        <Logo />
        			        <Rank username = {this.state.user.name} hits = {this.state.user.hits} />
        			        <Imageinput onInputChange = {this.onInputChange} onButtonClick= {this.onButtonClick} />
        			        <Imageoutput imagelink={this.state.imageUrl} box={this.state.box}/>
        			    </div>)}
      </div>
    );
  }
}

export default App;
