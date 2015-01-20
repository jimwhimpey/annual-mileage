var UnitSwitcher = React.createClass({displayName: "UnitSwitcher",
	
	componentDidMount: function() {
		this.setState({isMetric: isMetric});
	},
	
	handleChange: function(e) {
		this.props.handleChange(e);
	},
	
	render: function() {
		return (
			React.createElement("ul", {class: "unit-switcher"}, 
				React.createElement("li", null, React.createElement("a", {onClick: this.handleChange.bind(null, true)}, "metric")), 
				React.createElement("li", null, React.createElement("a", {onClick: this.handleChange.bind(null, false)}, "imperial"))
			)
		);
	}
	
});