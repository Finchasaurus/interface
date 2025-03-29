import { atom } from "@rbxts/charm";

const InitialState = {
	lastSelected: 0,
	groups: ["Play", "Settings", "Extras", "Credits"],
};
const menu = atom(InitialState, {
	setLastSelected: (state, lastSelected: number) => {
		return {
			...state,
			lastSelected,
		};
	},
});

export const menuState = menu;
