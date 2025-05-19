import React, { PropsWithChildren } from "@rbxts/react";
import { Empty } from "components/primitive/empty";
import { usePx } from "hooks/use-px";
import { transform } from "util/transform.util";
import { Button } from "./button";
import { Trail } from "./trail";

interface MenuGroupProps {
	groups: Array<string>;
}

export function MenuGroup(props: PropsWithChildren<MenuGroupProps>) {
	const px = usePx();
	return (
		<Empty
			native={{
				Size: new UDim2(1, 0, 0, px(55 * props.groups.size())),
				Position: transform.position.left.center,
				AnchorPoint: transform.anchor.left.center,
			}}
		>
			<Empty
				debug
				native={{
					Size: new UDim2(0, px(75), 1, 0),
					Position: transform.position.left.center,
					AnchorPoint: transform.anchor.left.center,
				}}
			>
				<Trail />
			</Empty>
			<folder>
				<uilistlayout SortOrder={"LayoutOrder"} VerticalFlex={"Fill"} />
				{props.groups.map((name, i) => (
					<Button key={name} text={name} index={i} />
				))}
			</folder>
		</Empty>
	);
}
