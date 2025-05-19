import React from "@rbxts/react";
import { transform } from "util/transform.util";

export function Trail() {
	return (
		<frame
			Size={UDim2.fromOffset(25, 25)}
			Position={transform.position.center.center}
			AnchorPoint={transform.anchor.center.center}
		></frame>
	);
}
