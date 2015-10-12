/// <reference path="../../../typings/react/react.d.ts" />

declare module "react-tap-event-plugin" {
	export default function injectTapEventPlugin(): void;
}

declare module __React {
	export interface DOMComponent<P> extends Props<P> {
		onTouchTap?: TouchEventHandler;
	}
	
	interface DOMAttributesBase<T> extends Props<T> {
		onTouchTap?: TouchEventHandler;
	}
}