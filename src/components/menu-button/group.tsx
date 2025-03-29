import React, { PropsWithChildren } from "@rbxts/react";
import { Empty } from "components/primitive/empty";
import { transform } from "util/transform.util";
import { Button } from "./button";

interface MenuGroupProps {
	groups: Array<string>;
}

export function MenuGroup(props: PropsWithChildren<MenuGroupProps>) {
	return (
		<Empty
			native={{
				Size: transform.size.none.Y,
				AutomaticSize: Enum.AutomaticSize.Y,
				Position: transform.position.left.center,
				AnchorPoint: transform.anchor.left.center,
			}}
		>
			<uilistlayout SortOrder={"LayoutOrder"} />
			{props.groups.map((name, i) => (
				<Button key={name} text={name} index={i} />
			))}
		</Empty>
	);
}
