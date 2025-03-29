import React, { PropsWithChildren, Ref } from "@rbxts/react";
import { NativePropsExcept } from "types/react";
import { size } from "util/transform.util";

export interface EmptyProps {
	debug?: boolean;
	native?: NativePropsExcept<Frame, "BackgroundTransparency">;
	ref?: Ref<Frame>;
}

export function Empty(props: PropsWithChildren<EmptyProps>) {
	return (
		<frame
			BackgroundTransparency={props.debug === true ? 0.5 : 1}
			BackgroundColor={BrickColor.Red()}
			Size={size.fill}
			ClipsDescendants
			ref={props.ref}
			{...props.native}
		>
			{props.children}
		</frame>
	);
}
