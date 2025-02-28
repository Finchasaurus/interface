import { joinAnyBindings, useCamera, useEventListener, useViewport } from "@rbxts/pretty-react-hooks";
import React, { PropsWithChildren, useBinding } from "@rbxts/react";

interface CardProps {}

const OFFSET = 3;
const PART_SIZE = new Vector3(2.5, 3.5, 0.1);
const DAMPING = 0.95;
const SENSITIVITY = 0.5;

export function Card(props: PropsWithChildren<CardProps>) {
	const viewport = useViewport();
	const camera = useCamera();
	const [cameraCFrame, setCameraCFrame] = useBinding(camera.CFrame);
	const [dragCFrame, setDragCFrame] = useBinding(new CFrame());

	const distance = viewport.map((vp) => {
		const aspectRatio = vp.X / vp.Y;
		const dx = PART_SIZE.X / 2 / math.tan(math.rad(camera.FieldOfView / 2));
		const dy = PART_SIZE.Y / 2 / math.tan(math.rad(camera.FieldOfView / 2));
		const dist = math.max(dx, dy) * aspectRatio;

		return dist + OFFSET;
	});

	useEventListener(camera.GetPropertyChangedSignal("CFrame"), () => setCameraCFrame(camera.CFrame));

	const finalCFrame = joinAnyBindings([cameraCFrame, distance]).map(([ccf, d]) => ccf.mul(new CFrame(0, 0, -d)));

	return (
		<part
			Transparency={0}
			Anchored
			CanCollide={false}
			CastShadow={false}
			Size={PART_SIZE}
			Locked
			CFrame={finalCFrame}
		>
			<dragdetector
				DragStyle={"RotateAxis"}
				Axis={finalCFrame.map((fcf) => fcf.UpVector)}
				Change={{
					DragFrame: (rbx) => setDragCFrame(rbx.DragFrame.Rotation),
				}}
			/>
			<surfacegui MaxDistance={1000} Face={"Back"}>
				<frame Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={0} ClipsDescendants>
					{props["children"]}
				</frame>
			</surfacegui>
		</part>
	);
}
