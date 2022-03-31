import React from "react";
import styles from './RegisterForm.module.css';
import * as MuiMat from '@mui/material';
import * as MuiIcons from '@mui/icons-material';
import GlobalContext from "../../../context/global-context";
import { AccountModel } from "../../../models/account.model";
import * as Formik from 'formik';
import * as Yup from 'yup';


interface RegisterFormI
{
	onFormSubmit(account: AccountModel): void
}


const RegisterForm: React.FC<RegisterFormI> = (props)=>
{
	const globalCTX = React.useContext(GlobalContext);

	//Validation Schema.
	const validationSchema = Yup.object(
		{
			username: Yup
				.string()
				.required(globalCTX.locale.required),

			email: Yup
				.string()
				.email(globalCTX.locale.invalidEmail)
				.required(globalCTX.locale.required),

			pass: Yup
				.string()
				.required(globalCTX.locale.required),

			repass: Yup
				.string()
				.required(globalCTX.locale.required)
				.oneOf([Yup.ref('pass'), null], globalCTX.locale.invalidPassMatch)
		}
	);
	

	//Setup Formik.
	const formik = Formik.useFormik({
		validationSchema: validationSchema,
		initialValues: {
			username: '',
			email: '',
			pass: '',
			repass: ''
		},
		onSubmit: (values)=>
		{
			let account 		= new AccountModel();
			account.m_username 	= values.username;
			account.m_email 	= values.email;
			account.m_password 	= values.pass;
			props.onFormSubmit(account);
		}
	});


	//Rendering.
	const margins = '1rem';
	return (
		<React.Fragment>

			<form className={styles.registerForm}
			onSubmit={formik.handleSubmit}
			>
				{/*Form Title*/}
				<div className={styles.registerTitle}>
					<label className={styles.registerTitleLabel}>
						{globalCTX.locale.register}
					</label>
				</div>

				{/*Username Input*/}
				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.username}
				name="username"
				fullWidth
				required
				label={globalCTX.locale.username}
				placeholder={globalCTX.locale.usernameHint}
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.AccountCircle />
					</MuiMat.InputAdornment>
				)}}
				error={formik.touched.username && Boolean(formik.errors.username)}
				helperText={formik.touched.username && formik.errors.username}
				/>

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

				{/*Re-enter Password Input*/}
				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				fullWidth
				name="repass"
				value={formik.values.repass}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				label={globalCTX.locale.re_password}
				type="password"
				placeholder={globalCTX.locale.re_passwordHint}
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.LockReset />
					</MuiMat.InputAdornment>
				)}}
				error={formik.touched.repass && Boolean(formik.errors.repass)}
				helperText={formik.touched.repass && formik.errors.repass}
				/>

				{/*Submit Button*/}
				<div className={styles.registerButton}>
					<MuiMat.Button 
					type="submit"
					variant="contained"
					startIcon={<MuiIcons.Login />}
					disabled={!formik.isValid}
					>
						{globalCTX.locale.register}
					</MuiMat.Button>
				</div>
				

			</form>
		</React.Fragment>
	);
};


export default RegisterForm;