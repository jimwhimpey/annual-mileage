var UnitSwitcher = React.createClass({displayName: "UnitSwitcher",
	
	getInitialState: function() {
		return { isMetric: this.props.isMetric };
	},
	
	handleSystemChange: function(e) {
		this.props.handleSystemChange(e);
	},
	
	render: function() {
		return (
			React.createElement("ul", {class: "unit-switcher"}, 
				React.createElement("li", null, React.createElement("button", {className: (this.state.isMetric) ? 'selected' : '', onClick: this.handleSystemChange.bind(null, true)}, "metric")), 
				React.createElement("li", null, React.createElement("button", {className: (!this.state.isMetric) ? 'selected' : '', onClick: this.handleSystemChange.bind(null, false)}, "imperial"))
			)
		);
	}
	
});