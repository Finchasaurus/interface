import React, { PropsWithChildren } from "@rbxts/react";
import { useMenu } from "hooks/state";
import { usePx } from "hooks/use-px";
import { menuState } from "state/menu.state";
import { transform } from "util/transform.util";

interface ButtonProps {
	text: string;
	index: number;
}

export function Button(props: PropsWithChildren<ButtonProps>) {
	const px = usePx();
	const menu = useMenu();

	const font = Font.fromEnum(Enum.Font.Nunito);
	font.Bold = true;

	const selectedTextColor = Color3.fromRGB(0, 0, 0);
	const selectedTextBorderColor = Color3.fromRGB(115, 115, 115);
	const unselectedTextColor = Color3.fromRGB(255, 255, 255);
	const unselectedTextBorderColor = Color3.fromRGB(0, 0, 0);

	const isSelected = menu.lastSelected === props.index;

	return (
		<textbutton
			Transparency={1}
			Size={new UDim2(0, px(500), 0, px(75))}
			Event={{
				MouseEnter: () => {
					menuState.setLastSelected(props.index);
				},
			}}
		>
			<textlabel
				Text={props.text.upper()}
				BackgroundTransparency={isSelected ? 0 : 1}
				Size={transform.size.fill}
				TextSize={px(64)}
				FontFace={font}
				TextColor3={isSelected ? selectedTextColor : unselectedTextColor}
				TextXAlignment={"Left"}
				ZIndex={2}
			>
				<uipadding PaddingLeft={new UDim(0, px(100 + 20 * props.index))} PaddingTop={new UDim(0, px(10))} />
				{isSelected && <uistroke Thickness={px(3)} Color={selectedTextBorderColor} />}
			</textlabel>
			{/* Text Dropshadow */}
			<textlabel
				Text={props.text.upper()}
				BackgroundTransparency={isSelected ? 0 : 1}
				Size={transform.size.fill}
				TextSize={px(64)}
				FontFace={font}
				TextXAlignment={"Left"}
				TextColor3={unselectedTextBorderColor}
			>
				<uipadding
					PaddingLeft={new UDim(0, px(100 + 20 * props.index + 2))}
					PaddingTop={new UDim(0, px(10 + 2))}
				/>
			</textlabel>
		</textbutton>
	);
}
