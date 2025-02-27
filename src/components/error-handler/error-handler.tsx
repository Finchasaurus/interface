import React from "@rbxts/react";
import ErrorBoundary from "./error-boundry";
import ErrorPage from "./error-page";

type ErrorHandlerProps = React.PropsWithChildren;

export default function ErrorHandler({ children }: Readonly<ErrorHandlerProps>): React.ReactNode {
	return (
		<ErrorBoundary
			Fallback={(err) => {
				return <ErrorPage message={tostring(err)} />;
			}}
		>
			{children}
		</ErrorBoundary>
	);
}
