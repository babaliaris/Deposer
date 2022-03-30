import { IconsE } from "../other/icons.enum";

export class IncomeModel
{
	public m_id			: number = -1;
	public m_ammount	: number = 0;
	public m_date		: Date   = new Date(Date.now());
	public m_icon		: IconsE = IconsE.NONE;
	public m_from		: string = '';
}