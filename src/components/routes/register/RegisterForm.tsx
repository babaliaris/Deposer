import React from "react";
import styles from './RegisterForm.module.css';
import * as MuiMat from '@mui/material';
import * as MuiIcons from '@mui/icons-material';
import GlobalContext from "../../../context/global-context";


const RegisterForm: React.FC = (props)=>
{
	const [margins] = React.useState('1rem');
	const globalCTX = React.useContext(GlobalContext);

	return (
		<React.Fragment>

			<form className={styles.registerForm}>

				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				fullWidth
				required
				label={globalCTX.locale.username}
				placeholder={globalCTX.locale.usernameHint}
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.AccountCircle />
					</MuiMat.InputAdornment>
				)}}
				/>

				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				fullWidth
				label={globalCTX.locale.email}
				type="email"
				placeholder={globalCTX.locale.emailHint}
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
				label={globalCTX.locale.password}
				type="password"
				placeholder={globalCTX.locale.passwordHint}
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.Key />
					</MuiMat.InputAdornment>
				)}}
				/>

				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				fullWidth
				label={globalCTX.locale.re_password}
				type="password"
				placeholder={globalCTX.locale.re_passwordHint}
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