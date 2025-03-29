import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { CardFront } from "cards/card-front";
import { Empty } from "components/primitive/empty";

const controls = {};
const story = CreateReactStory({ controls, react: React, reactRoblox: ReactRoblox }, (props) => {
	return (
		<>
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				HorizontalAlignment={"Center"}
				VerticalAlignment={"Center"}
			/>
			<uipadding
				PaddingBottom={new UDim(0, 150)}
				PaddingLeft={new UDim(0, 150)}
				PaddingRight={new UDim(0, 150)}
				PaddingTop={new UDim(0, 150)}
			/>
			<Empty>
				<uiaspectratioconstraint AspectRatio={2.5 / 3.5} />
				<CardFront />
			</Empty>
		</>
	);
});

export = story;
