import React, { PropsWithChildren } from "@rbxts/react";
import { useMenu } from "hooks/state";
import { usePx } from "hooks/use-px";
import { transform } from "util/transform.util";
import { Empty, EmptyProps } from "../primitive/empty";

interface ContainerProps {
	text: string;
	index: number;
	native?: EmptyProps["native"];
}

export function Container(props: PropsWithChildren<ContainerProps>) {
	const px = usePx();
	const menu = useMenu();

	const font = Font.fromEnum(Enum.Font.Nunito);
	font.Bold = true;

	return (
		<Empty
			native={{
				Size: new UDim2(0, px(500), 0, px(75)),
				Position: transform.position.left.center,
				AnchorPoint: transform.anchor.left.center,
				ClipsDescendants: false,
				LayoutOrder: props.index,
				...props.native,
			}}
		>
			<Empty>
				<uilistlayout FillDirection={Enum.FillDirection.Horizontal} />
				<frame
					Size={transform.size.fill.sub(UDim2.fromOffset(px(225), 0))}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BorderSizePixel={0}
				></frame>
				<frame
					Size={transform.size.none.X.add(UDim2.fromOffset(px(225), 0))}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BorderSizePixel={0}
				>
					<uigradient
						Offset={new Vector2(-0.08, 0)}
						Transparency={
							new NumberSequence([
								new NumberSequenceKeypoint(0, 0),
								new NumberSequenceKeypoint(0.3, 0),
								new NumberSequenceKeypoint(0.301, 1),
								new NumberSequenceKeypoint(0.6, 1),
								new NumberSequenceKeypoint(0.601, 0),
								new NumberSequenceKeypoint(0.9, 0),
								new NumberSequenceKeypoint(0.901, 1),
								new NumberSequenceKeypoint(1, 1),
							])
						}
						Rotation={-45}
					/>
				</frame>
			</Empty>
			<textlabel
				Text={props.text.upper()}
				BackgroundTransparency={1}
				Size={transform.size.fill}
				TextSize={px(64)}
				FontFace={font}
				TextColor3={Color3.fromRGB(0, 0, 0)}
			>
				<uipadding PaddingTop={new UDim(0, px(10))} />
				<uistroke Thickness={px(3)} Color={Color3.fromRGB(115, 115, 115)} />
			</textlabel>
		</Empty>
	);
}
