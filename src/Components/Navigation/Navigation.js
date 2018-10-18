import React from 'react';

const Navigation = ({onRouteChange,route}) =>{
	console.log({route}.route);
	if({route}.route==='signedin'){
		return(
			<nav style={{display: 'flex',justifyContent: 'flex-end'}}>
				<p className="f3 link dim pointer black underline pa3" onClick={()=>onRouteChange("signin")}>Sign Out</p>
			</nav>
			);
	}else if({route}.route==='signin'){
		return(
			<nav style={{display: 'flex',justifyContent: 'flex-end'}}>				
				<p className="f3 link dim pointer black underline pa3" onClick={()=>onRouteChange("register")}>Register</p>
			</nav>
			);
	}else{
		return(
			<nav style={{display: 'flex',justifyContent: 'flex-end'}}>				
				<p className="f3 link dim pointer black underline pa3" onClick={()=>onRouteChange("signin")}>Sign In</p>
			</nav>
			);
	}
}

export default Navigation;