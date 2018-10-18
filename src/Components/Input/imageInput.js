import React from 'react';
import './imageInput.css';
const Imageinput = ({onInputChange, onButtonClick}) =>{
	return(
		<div className="pa4 ml7 mr7 shadow-2 pattern" style={{display: 'flex', justifyContent: 'center'}}>
			<input type="text" placeholder="Enter url here" onChange={onInputChange} style={{width: '70%'}}/>
			<input type="button" value="Enter" onClick={onButtonClick} className="pointer dim f5 grow bg-purple" style={{width: '30%'}} />
		</div>
		);
}
export default Imageinput;