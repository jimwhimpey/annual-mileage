var MileageContent = React.createClass({
	
	getInitialState: function() {
		return this.props;
	},
	
	handleChange: function(e) {
		this.setState({isMetric: e});
		return;
	},
	
	render: function() {
		return (
			<div>
				<UnitSwitcher isMetric={this.state.isMetric} handleChange={this.handleChange} />
				<MileageData rideData={this.state.rideData} isMetric={this.state.isMetric} />
				<MileageProjector rideData={this.state.rideData} isMetric={this.state.isMetric} />
			</div>
		);
	}
});