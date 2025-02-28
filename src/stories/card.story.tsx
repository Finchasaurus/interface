import React from "@rbxts/react";
import ReactRoblox, { createPortal } from "@rbxts/react-roblox";
import { CreateReactStory, Environment } from "@rbxts/ui-labs";
import { Card } from "cards/card";

const controls = {};
const story = CreateReactStory({ controls, react: React, reactRoblox: ReactRoblox }, (props) => {
	Environment.SetStoryHolder(game.Workspace.CurrentCamera);

	return createPortal(<Card />, game.Workspace.CurrentCamera!);
});

export = story;
