import React from "@rbxts/react";
import Layer from "components/primitive/layer";
import ErrorHandler from "./components/error-handler/error-handler";

export function App() {
	return (
		<ErrorHandler>
			<Layer key="core"></Layer>
		</ErrorHandler>
	);
}
