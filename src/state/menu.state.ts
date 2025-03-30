import { atom } from "@rbxts/charm";

const InitialState = {
	lastSelected: 0,
	prevSelected: undefined as number | undefined,
	groups: ["Play", "Settings", "Extras", "Credits"],
};
const menu = atom(InitialState, {
	setLastSelected: (state, lastSelected: number) => {
		return {
			...state,
			lastSelected,
			prevSelected: state.lastSelected,
		};
	},
});

export const menuState = menu;
