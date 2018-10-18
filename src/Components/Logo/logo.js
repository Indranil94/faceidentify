import React from 'react';
import Tilt from 'react-tilt';
import irmb from './irmb.png';
const Logo = () =>{
	return (
		<div>
			<Tilt className="Tilt shadow2 pa3 ma2 " options={{ max : 35 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner shadow"> 
			 	<img src={irmb} alt="img" /> 
			 </div>
			</Tilt>
		</div>
		);
}
export default Logo;