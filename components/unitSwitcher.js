var UnitSwitcher = React.createClass({
	
	getInitialState: function() {
		return { isMetric: this.props.isMetric };
	},
	
	handleSystemChange: function(e) {
		this.props.handleSystemChange(e);
	},
	
	render: function() {
		return (
			<ul class="unit-switcher">
				<li><button onClick={this.handleSystemChange.bind(null, true)}>metric</button></li>
				<li><button onClick={this.handleSystemChange.bind(null, false)}>imperial</button></li>
			</ul>
		);
	}
	
});