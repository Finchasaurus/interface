import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { App } from "../app";

const controls = {};

const story = CreateReactStory({ controls, react: React, reactRoblox: ReactRoblox }, (props) => {
	return <App />;
});

export = story;
