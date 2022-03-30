import { LocaleI } from "./scripts/locale.interface";

export class Default implements LocaleI
{
	readonly username						: string = "Username";
	readonly usernameHint					: string = "Enter a username";
	readonly email							: string = "Email";
	readonly emailHint						: string = "Enter your email address";
	readonly password						: string = "Password";
	readonly passwordHint					: string = "Enter a password";
	readonly re_password					: string = "Re-Password";
	readonly re_passwordHint				: string = "Re-enter the password";
	readonly register						: string = "Register";
	readonly login							: string = "Login";
	readonly required						: string = "This field is required";
	readonly invalidEmail					: string = "Invalid email address";
	readonly invalidPassMatch				: string = "Passwords do not match";
}