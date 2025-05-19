import { lerp, useBindingListener, useMotion } from "@rbxts/pretty-react-hooks";
import React, { PropsWithChildren } from "@rbxts/react";
import { Empty } from "components/primitive/empty";
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

	const [motion, motor] = useMotion(0);
	const [sizeMotion, sizeMotor] = useMotion(1);

	const font = Font.fromEnum(Enum.Font.Nunito);
	font.Bold = true;

	const selectedTextColor = Color3.fromRGB(0, 0, 0);
	const selectedTextBorderColor = Color3.fromRGB(115, 115, 115);
	const unselectedTextColor = Color3.fromRGB(255, 255, 255);
	const unselectedTextBorderColor = Color3.fromRGB(0, 0, 0);

	const isSelected = menu.lastSelected === props.index;
	const wasPreviouslySelected = menu.prevSelected === props.index;

	const textSize = motion.map((v) => px(lerp(45, 64, v)));

	useBindingListener(isSelected, (isSelected) => {
		if (isSelected) {
			sizeMotor.set(5);
			motor.spring(1);
			sizeMotor.spring(1);
		} else {
			motor.spring(0);
		}
	});

	return (
		<textbutton
			Transparency={1}
			BorderSizePixel={0}
			Size={transform.size.fill}
			ClipsDescendants
			Event={{
				MouseEnter: () => {
					if (isSelected) return;
					menuState.setLastSelected(props.index);
				},
			}}
		>
			<uipadding PaddingLeft={new UDim(0, px(100 + 20 * props.index))} PaddingTop={new UDim(0, px(10))} />
			<Empty
				native={{
					Position: transform.position.left.center,
					AnchorPoint: transform.anchor.left.center,
				}}
			>
				<uiscale Scale={sizeMotion} />
				<textlabel
					BackgroundTransparency={1}
					Text={props.text.upper()}
					Size={transform.size.fill}
					TextSize={textSize}
					FontFace={font}
					TextColor3={isSelected ? selectedTextColor : unselectedTextColor}
					TextXAlignment={"Left"}
					ZIndex={2}
				>
					<uistroke
						Thickness={px(3)}
						Color={selectedTextBorderColor}
						Transparency={motion.map((v) => {
							return 1 - v;
						})}
					/>
				</textlabel>
				<textlabel
					Text={props.text.upper()}
					BackgroundTransparency={1}
					Size={transform.size.fill}
					TextSize={textSize}
					FontFace={font}
					TextXAlignment={"Left"}
					TextColor3={unselectedTextBorderColor}
				>
					<uipadding PaddingLeft={new UDim(0, px(2))} PaddingTop={new UDim(0, px(2))} />
				</textlabel>
			</Empty>
		</textbutton>
	);
}
