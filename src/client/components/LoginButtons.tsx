import * as React from 'react';

export default class LoginButtons extends React.Component<{}, {}> {
	private view: Blaze.View;
	
	componentDidMount() {
		this.view = Blaze.render(Template["loginButtons"], (this.refs["container"] as any));
	}
	
	componentWillUnmount() {
		Blaze.remove(this.view);
	}
	
	render() {
		return <span ref="container" />
	}
}