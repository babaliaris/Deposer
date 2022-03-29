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
}