import React from 'react';

const Rank = ({username,hits}) =>{
	return(
		<div className="tc-l mt4 mt5-m mt6-l ph3">
        	<h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Welcome {username}. Your total count is {hits}</h1>
        </div>
		);
}

export default Rank;