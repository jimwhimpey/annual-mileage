var MileageContent = React.createClass({displayName: "MileageContent",
	
	getInitialState: function() {
		return this.props;
	},
	
	handleChange: function(e) {
		this.setState({isMetric: e});
		return;
	},
	
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement(UnitSwitcher, {isMetric: this.state.isMetric, handleChange: this.handleChange}), 
				React.createElement(MileageData, {rideData: this.state.rideData, isMetric: this.state.isMetric}), 
				React.createElement(MileageProjector, {rideData: this.state.rideData, isMetric: this.state.isMetric})
			)
		);
	}
});