import React from "react";
import styles from './Login.module.css';

import * as MuiMat from '@mui/material';
import * as MuiIcons from '@mui/icons-material';
import GlobalContext from "../../../context/global-context";
import { AccountModel } from "../../../models/account.model";
import * as Formik from 'formik';
import * as Yup from 'yup';


const Login: React.FC<any> = (props)=>
{
	const globalCTX = React.useContext(GlobalContext);

	//Validation Schema.
	const validationSchema = Yup.object(
		{
			email: Yup
				.string()
				.email(globalCTX.locale.invalidEmail)
				.required(globalCTX.locale.required),

			pass: Yup
				.string()
				.required(globalCTX.locale.required)
		}
	);
	

	//Setup Formik.
	const formik = Formik.useFormik({
		validationSchema: validationSchema,
		initialValues: {
			email: '',
			pass: ''
		},
		onSubmit: (values)=>
		{
			let account 		= new AccountModel();
			account.m_email 	= values.email;
			account.m_password 	= values.pass;
			console.log("LogIN");
		}
	});

	//Rendering.
	const margins = '1rem';
	return (
		<form
		className={styles.form} 
		onSubmit={formik.handleSubmit}
		>

			{/*Form Title*/}
			<div className={styles.title}>
				<label className={styles.titleLabel}>
					{globalCTX.locale.login}
				</label>
			</div>

			{/*Email Input*/}
			<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				fullWidth
				required
				name="email"
				value={formik.values.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				label={globalCTX.locale.email}
				type="email"
				placeholder={globalCTX.locale.emailHint}
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.AlternateEmail />
					</MuiMat.InputAdornment>
				)}}
				error={formik.touched.email && Boolean(formik.errors.email)}
				helperText={formik.touched.email && formik.errors.email}
				/>

				{/*Password Input*/}
				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				fullWidth
				name="pass"
				value={formik.values.pass}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				label={globalCTX.locale.password}
				type="password"
				placeholder={globalCTX.locale.passwordHint}
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.Key />
					</MuiMat.InputAdornment>
				)}}
				error={formik.touched.pass && Boolean(formik.errors.pass)}
				helperText={formik.touched.pass && formik.errors.pass}
				/>

				{/*Submit Button*/}
				<div className={styles.loginButton}>
					<MuiMat.Button 
					type="submit"
					variant="contained"
					startIcon={<MuiIcons.Login />}
					disabled={!formik.isValid}
					>
						{globalCTX.locale.login}
					</MuiMat.Button>
				</div>

		</form>
	);
};

export default Login;