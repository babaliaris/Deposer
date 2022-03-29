import React from "react";
import styles from './RegisterForm.module.css';
import * as MuiMat from '@mui/material';
import * as MuiIcons from '@mui/icons-material';


const RegisterForm: React.FC = (props)=>
{
	const [margins] = React.useState('1rem');
	return (
		<React.Fragment>

			<form className={styles.registerForm}>

				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				fullWidth
				required
				label="Username"
				placeholder="Username"
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.AccountCircle />
					</MuiMat.InputAdornment>
				)}}
				/>

				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				fullWidth
				label="Email"
				type="email"
				placeholder="Enter your email address"
				autoComplete="current-email"
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.AlternateEmail />
					</MuiMat.InputAdornment>
				)}}
				/>

				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				fullWidth
				label="Password"
				type="password"
				placeholder="Enter a password"
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.Key />
					</MuiMat.InputAdornment>
				)}}
				/>

				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				fullWidth
				label="RePassword"
				type="password"
				placeholder="Re-enter the password"
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.LockReset />
					</MuiMat.InputAdornment>
				)}}
				/>

			</form>
		</React.Fragment>
	);
};


export default RegisterForm;