import React, { useEffect, useState } from "@rbxts/react";
import { AssetService, RunService } from "@rbxts/services";
import { size } from "util/transform.util";

export function Background() {
	const [label, setLabel] = useState<ImageLabel>();

	useEffect(() => {
		if (!label) return;

		const editableImageSize = Vector2.one.mul(16);
		const editableImage = AssetService.CreateEditableImage({ Size: editableImageSize });
		const pixelBuffer = buffer.create(editableImageSize.X * editableImageSize.Y * 4);

		label.ImageContent = Content.fromObject(editableImage);

		const noiseScale = 0.1;
		const speed = 0.5;
		let time = 0;

		const conn = RunService.Heartbeat.Connect((dt) => {
			time += dt * speed;

			for (let y = 0; y < editableImageSize.Y; y++) {
				for (let x = 0; x < editableImageSize.X; x++) {
					const i = (y * editableImageSize.X + x) * 4;

					let value = 0;
					let amplitude = 1;
					let frequency = 1;
					let maxValue = 0;

					for (let o = 0; o < 3; o++) {
						const nx = x * noiseScale * frequency;
						const ny = y * noiseScale * frequency;
						const nz = time * frequency;

						const noise = math.noise(nx, ny, nz);

						const normalizedNoise = (noise + 1) * 0.5;

						value += normalizedNoise * amplitude;
						maxValue += amplitude;
						amplitude *= 0.5;
						frequency *= 2;
					}

					value /= maxValue; // Normalize to 0-1 range
					const grayscale = math.floor(value * 255);

					buffer.writeu8(pixelBuffer, i + 0, grayscale);
					buffer.writeu8(pixelBuffer, i + 1, grayscale);
					buffer.writeu8(pixelBuffer, i + 2, grayscale);
					buffer.writeu8(pixelBuffer, i + 3, 255);
				}
			}

			editableImage.WritePixelsBuffer(Vector2.zero, editableImageSize, pixelBuffer);
		});

		return () => {
			editableImage.Destroy();
			conn.Disconnect();
		};
	}, [label]);

	return <imagelabel key={"bg"} Size={size.fill} ref={setLabel} ZIndex={-10} BackgroundTransparency={1} />;
}
