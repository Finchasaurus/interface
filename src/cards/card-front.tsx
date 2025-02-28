import React from "@rbxts/react";
import { transform } from "util/transform.util";

export function CardFront() {
	return (
		<frame Size={transform.size.fill} BackgroundColor3={Color3.fromRGB(255, 255, 255)}>
			<uicorner CornerRadius={new UDim(0, 18)} />
			<uipadding
				PaddingTop={new UDim(0, 10)}
				PaddingBottom={new UDim(0, 10)}
				PaddingLeft={new UDim(0, 10)}
				PaddingRight={new UDim(0, 10)}
			/>
			<frame Size={transform.size.fill}>
				<uicorner CornerRadius={new UDim(0, 12)} />
			</frame>
		</frame>
	);
}
