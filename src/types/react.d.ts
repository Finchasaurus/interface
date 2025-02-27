import { InstanceProps } from "@rbxts/react";

export declare type NativeProps<T extends Instance> = InstanceProps<T>;
export declare type NativePropsExcept<T extends Instance, K extends keyof InstanceProps<T>> = Omit<InstanceProps<T>, K>;
export declare type BindingValue<T = unknown> = NonNullable<T> | React.Binding<T>;
