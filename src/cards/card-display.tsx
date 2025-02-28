import { joinAnyBindings, useCamera, useEventListener, useViewport } from "@rbxts/pretty-react-hooks";
import React, { ReactNode, useBinding } from "@rbxts/react";
import { Empty } from "components/primitive/empty";

interface CardProps {
	frontFace?: ReactNode;
	backFace?: ReactNode;
}

const OFFSET = 3;
const PART_SIZE = new Vector3(2.5, 3.5, 0.1);

export function CardDisplay(props: CardProps) {
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
				<Empty>{props.frontFace}</Empty>
			</surfacegui>
			<surfacegui MaxDistance={1000} Face={"Front"}>
				<Empty>{props.backFace}</Empty>
			</surfacegui>
		</part>
	);
}
