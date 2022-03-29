import { LocaleI } from "./locale.interface";
import { LanguagesE } from "./languages.enum";
import { Default } from "../default";
import { ElGR } from "../el_GR";

export const loadLocale = (language: LanguagesE):LocaleI=>
{
	switch (language)
	{
		case LanguagesE.en_US:
			return new Default();

		case LanguagesE.el_GR:
			return new ElGR();

		default:
			return new Default();
	}
};