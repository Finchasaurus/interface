import React from "@rbxts/react";
import { MenuGroup } from "components/menu-button/group";
import Layer from "components/primitive/layer";
import ErrorHandler from "./components/error-handler/error-handler";

export function App() {
	return (
		<ErrorHandler>
			<Layer key="core">
				<MenuGroup groups={["Play", "Settings", "Extras", "Credits"]} />
				{/* <Background /> */}
			</Layer>
		</ErrorHandler>
	);
}
