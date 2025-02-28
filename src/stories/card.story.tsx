import React from "@rbxts/react";
import ReactRoblox, { createPortal } from "@rbxts/react-roblox";
import { CreateReactStory, Environment } from "@rbxts/ui-labs";
import { CardDisplay } from "cards/card-display";
import { CardFront } from "cards/card-front";

const controls = {};
const story = CreateReactStory({ controls, react: React, reactRoblox: ReactRoblox }, (props) => {
	Environment.SetStoryHolder(game.Workspace.CurrentCamera);

	return createPortal(<CardDisplay frontFace={<CardFront />} />, game.Workspace.CurrentCamera!);
});

export = story;
