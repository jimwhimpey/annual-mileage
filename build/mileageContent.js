var MileageContent = React.createClass({displayName: "MileageContent",
	
	componentDidMount: function() {
		this.setState({
			rideData: rideData,
			isMetric: isMetric
		});
	},
	
	handleChange: function(e) {
		console.log("unitSwitcher setState", e);
		this.setState({isMetric: e});
		return;
	},
	
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement(UnitSwitcher, {isMetric: this.props.isMetric, handleChange: this.handleChange}), 
				React.createElement(MileageData, {rideData: this.props.rideData, isMetric: this.props.isMetric})
			)
		);
	}
});