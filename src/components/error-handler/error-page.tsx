import React from "@rbxts/react";
import { size } from "util/transform.util";

interface ErrorPageProps {
	message: string;
}

export default function ErrorPage({ message: Message }: Readonly<ErrorPageProps>): React.ReactNode {
	return <frame Size={size.fill} BackgroundColor={BrickColor.Red()} />;
}
