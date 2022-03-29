import React from "react";
import * as Router from 'react-router-dom';

const Main: React.FC<any> = (props) =>
{
	return (
		<React.Fragment>
			<Router.Outlet/>
		</React.Fragment>
	);
};

export default Main;