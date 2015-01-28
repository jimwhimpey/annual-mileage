var MileageData = React.createClass({
	
	displayName: 'MileageData',
	
	getInitialState: function() {
		return { isMetric: this.props.isMetric };
	},
	
	componentWillReceiveProps: function(nextProps) {
		this.setState({ isMetric: nextProps.isMetric });
	},
	
	render: function() {
		return (
			<div className="mileageData">
			
				<ul className="yearToDate">
					<li>This year's distance: {formatNumber(this.props.rideData.ytdDistance, '0,0.00', 'big', this.state.isMetric)}</li>
					<li>This year's elevation gain: {formatNumber(this.props.rideData.ytdElevation, '0,0.00', 'small', this.state.isMetric)}</li>
				</ul>
			
				<ul className="averageYearToDate">
					<li>Average distance per day this year: {formatNumber(this.props.rideData.ytdDistancePerDay, '0,0', 'big', this.state.isMetric)}</li>
					<li>Average elevation gain per day this year: {formatNumber(this.props.rideData.ytdElevationPerDay, '0,0', 'small', this.state.isMetric)}</li>
					<li>Average distance per week this year: {formatNumber(this.props.rideData.ytdDistancePerWeek, '0,0', 'big', this.state.isMetric)}</li>
					<li>Average elevation gain per week this year: {formatNumber(this.props.rideData.ytdElevationPerWeek, '0,0', 'small', this.state.isMetric)}</li>
				</ul>
				
				<ul className="currentProjection">
					<li>Days left in year: {this.props.rideData.daysLeftInYear}</li>
					<li>Projected annual distance: {formatNumber(this.props.rideData.projectedAnnualDistance, '0,0', 'big', this.state.isMetric)}</li>
					<li>Projected annual elevation: {formatNumber(this.props.rideData.projectedAnnualElevation, '0,0', 'small', this.state.isMetric)}</li>
				</ul>
			
			</div>
		);
	}
	
});