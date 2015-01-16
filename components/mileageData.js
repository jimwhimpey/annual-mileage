var MileageData = React.createClass({
	displayName: 'MileageData',
	getInitialState: function() {
		return {rideData: {}};
	},
	componentDidMount: function() {
		this.setState({rideData: rideData});
	},
	render: function() {
		return (
			<div className="mileageData">
				Year to date distance: {formatNumber(this.props.rideData.ytdDistance, '0,0.00', 'big', rideData.isMetric)}<br />
				Year to date elevation gain: {formatNumber(this.props.rideData.ytdElevation, '0,0.00', 'small', rideData.isMetric)}<br />
			</div>
		);
	}
});