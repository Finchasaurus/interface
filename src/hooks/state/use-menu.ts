import { useAtom } from "@rbxts/react-charm";
import { menuState } from "state/menu.state";

export function useMenu() {
	return useAtom(menuState);
}
