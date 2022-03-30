import React from "react";

import RegisterForm from "./RegisterForm";
import { AccountModel } from "../../../models/account.model";

const Register: React.FC = (props)=>
{
	const onRegisterSubmit = React.useCallback((account: AccountModel)=>
	{
		console.log(account);
	}, []);

	return (
		<React.Fragment>

			<RegisterForm
			onFormSubmit={onRegisterSubmit}
			/>

		</React.Fragment>
	);
};

export default Register;