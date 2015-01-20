var MileageContent = React.createClass({
	
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
			<div>
				<UnitSwitcher isMetric={this.props.isMetric} handleChange={this.handleChange} />
				<MileageData rideData={this.props.rideData} isMetric={this.props.isMetric} />
			</div>
		);
	}
});