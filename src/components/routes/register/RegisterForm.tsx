import React from "react";
import styles from './RegisterForm.module.css';
import * as MuiMat from '@mui/material';
import * as MuiIcons from '@mui/icons-material';
import GlobalContext from "../../../context/global-context";
import { AccountModel } from "../../../models/account.model";


interface RegisterFormI
{
	onFormSubmit(account: AccountModel): void
}


interface PasswordStateI
{
	pass		: string
	passValid	: boolean
	passError	: string

	rePass		: string
	rePassValid	: boolean
	rePassError	: string

	passMatch	: boolean
}


const RegisterForm: React.FC<RegisterFormI> = (props)=>
{
	const globalCTX = React.useContext(GlobalContext);

	const [username, setUsername] 			= React.useState<string>('');
	const [usernameError, setUsernameError]	= React.useState<string>('');
	const [usernameValid, setUsernameValid] = React.useState<boolean>(true);

	const [email, setEmail] 				= React.useState<string>('');
	const [emailError, setEmailError]		= React.useState<string>('');
	const [emailValid, setEmailValid] 		= React.useState<boolean>(true);

	const [pass, setPass] 					= React.useState<PasswordStateI>({
		pass: '', passValid: true, passError: '',
		rePass: '', rePassValid: true, rePassError: '',
		passMatch: true
	});

	//Reused in single state forms.
	const handlerFunctionality = React.useCallback( 
		(value: string, setField: any, setFieldValid: any, setFieldError: any)=>
	{
		setField(value);

		if (value.trim().length === 0) 
		{
			setFieldValid(false);
			setFieldError(globalCTX.locale.required);
		}

		else
		{
			setFieldValid(true);
		}

	}, [globalCTX]);

	//Username Handler (Single state)
	const onUsernameHandler = React.useCallback( (obj)=>
	{
		let v = obj.target.value as string;
		handlerFunctionality(v, setUsername, setUsernameValid, setUsernameError);

	}, [handlerFunctionality]);

	//Email Handler (Single state)
	const onEmailHandler 	= React.useCallback( (obj)=>
	{
		let v = obj.target.value as string;
		handlerFunctionality(v, setEmail, setEmailValid, setEmailError);

	}, [handlerFunctionality]);

	//Pass Handler (Multiple states in one object)
	const onPassHandler 	= React.useCallback( (obj)=>
	{
		let v = obj.target.value as string;

		if (v.trim().length === 0)
		{
			setPass( (prevState: PasswordStateI): PasswordStateI=>
			{
				let match = pass.rePass === v;
				return {...prevState, pass: v, passValid: false, passError: globalCTX.locale.required, passMatch: match};
			});
		}

		else
		{
			setPass( (prevState: PasswordStateI): PasswordStateI=>
			{
				let match = pass.rePass === v;
				return {...prevState, pass: v, passValid: true, passMatch: match};
			});
		}

	}, [globalCTX, pass]);

	//RePass Handler (Multiple states in one object)
	const onRePassHandler 	= React.useCallback( (obj)=>
	{
		let v = obj.target.value as string;

		if (v.trim().length === 0)
		{
			setPass( (prevState: PasswordStateI): PasswordStateI=>
			{
				let match = pass.pass === v;
				return {...prevState, rePass: v, rePassValid: false, rePassError: globalCTX.locale.required, passMatch: match};
			});
		}

		else
		{
			setPass( (prevState: PasswordStateI): PasswordStateI=>
			{
				let match = pass.pass === v;
				return {...prevState, rePass: v, rePassValid: true, passMatch: match};
			});
		}

	}, [globalCTX, pass]);


	//Check form validity as a whole.
	const checkFormValidity = React.useCallback((): boolean=>
	{
		let valid = true;

		if (username.trim().length === 0)
		{
			setUsernameValid(false);
			setUsernameError(globalCTX.locale.required);
			valid = false;
		}

		if (email.trim().length === 0)
		{
			setEmailValid(false);
			setEmailError(globalCTX.locale.required);
			valid = false;
		}

		if (pass.pass.trim().length === 0)
		{
			setPass( (prevPass: PasswordStateI):PasswordStateI=>
			{
				return {...prevPass, passValid: false, passError: globalCTX.locale.required}
			});
			valid = false;
		}

		if (pass.rePass.trim().length === 0)
		{
			setPass( (prevPass: PasswordStateI):PasswordStateI=>
			{
				return {...prevPass, rePassValid: false, rePassError: globalCTX.locale.required}
			});
			valid = false;
		}

		return valid;
	}, [username, email, pass, globalCTX]);


	//Submit Form Functionality.
	const {onFormSubmit} = props;
	const onSubmit = React.useCallback(()=>
	{
		let account: AccountModel = new AccountModel();

		if ( !checkFormValidity() ) return;

		account.m_username 	= username;
		account.m_email 	= email;
		account.m_password 	= pass.pass;

		onFormSubmit(account);

	}, [username, email, pass, onFormSubmit, checkFormValidity]);


	//Rendering.
	const margins = '1rem';
	return (
		<React.Fragment>

			<form className={styles.registerForm}
			>

				<div className={styles.registerTitle}>
					<label className={styles.registerTitleLabel}>
						{globalCTX.locale.register}
					</label>
				</div>

				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				onChange={onUsernameHandler}
				value={username}
				fullWidth
				required
				label={globalCTX.locale.username}
				placeholder={globalCTX.locale.usernameHint}
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.AccountCircle />
					</MuiMat.InputAdornment>
				)}}
				error={!usernameValid}
				helperText={!usernameValid ? usernameError : ''}
				/>

				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				fullWidth
				required
				value={email}
				onChange={onEmailHandler}
				label={globalCTX.locale.email}
				type="email"
				placeholder={globalCTX.locale.emailHint}
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.AlternateEmail />
					</MuiMat.InputAdornment>
				)}}
				error={!emailValid}
				helperText={!emailValid ? emailError : ''}
				/>

				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				fullWidth
				value={pass.pass}
				onChange={onPassHandler}
				label={globalCTX.locale.password}
				type="password"
				placeholder={globalCTX.locale.passwordHint}
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.Key />
					</MuiMat.InputAdornment>
				)}}
				error={!pass.passValid}
				helperText={!pass.passValid ? pass.passError : ''}
				/>

				<MuiMat.TextField
				style={{marginTop: margins, marginBottom: margins}}
				fullWidth
				value={pass.rePass}
				onChange={onRePassHandler}
				label={globalCTX.locale.re_password}
				type="password"
				placeholder={globalCTX.locale.re_passwordHint}
				InputProps={{startAdornment:(
					<MuiMat.InputAdornment position="start">
					  <MuiIcons.LockReset />
					</MuiMat.InputAdornment>
				)}}
				error={!pass.rePassValid || !pass.passMatch}
				helperText={!pass.rePassValid ? pass.rePassError : '' || !pass.passMatch ? globalCTX.locale.invalidPassMatch : ''}
				/>

				<div className={styles.registerButton}>
					<MuiMat.Button 
					variant="contained"
					startIcon={<MuiIcons.Login />}
					onClick={onSubmit}
					disabled={!usernameValid || !pass.passValid || !emailValid || !pass.rePassValid}
					>
						{globalCTX.locale.register}
					</MuiMat.Button>
				</div>

			</form>
		</React.Fragment>
	);
};


export default RegisterForm;