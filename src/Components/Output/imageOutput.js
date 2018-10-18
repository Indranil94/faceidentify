import React from 'react';
import "./imageOutput.css"
const Imageoutput = ({imagelink, box}) =>{
	return(
		<div className="absolute">
			<img id= "imageop" src={imagelink} alt='Please provide link of image' style={{textAlign: 'center', display: 'block', marginLeft:'auto', marginRight: 'auto'}}/>
			<div className = "bounding-box" style={{top: box.top, bottom: box.bottom, left:box.left, right: box.right}}></div>
		</div>
		);
}
export default Imageoutput;