import React from "react";
import { Default } from "../locale/default";
import { GlobalContextI } from "./global-context.interface";

const GlobalContext: React.Context<GlobalContextI> = React.createContext({
	locale: new Default()
});

export default GlobalContext;