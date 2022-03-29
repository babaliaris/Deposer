import { LocaleI } from "./scripts/locale.interface";

export class ElGR implements LocaleI
{
	readonly username						: string = "Όνομα Χρήστη";
	readonly usernameHint					: string = "Εισάγετε όνομα χρήστη";
	readonly email							: string = "Email";
	readonly emailHint						: string = "Εισάγετε το email σας";
	readonly password						: string = "Κωδικός";
	readonly passwordHint					: string = "Εισάγετε έναν κωδικό";
	readonly re_password					: string = "Επανάληψη Κωδικού";
	readonly re_passwordHint				: string = "Ξανά δώστε τον κωδικό";
}