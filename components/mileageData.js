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
			
				<ul class="yearToDate">
					<li>Year to date distance: {formatNumber(this.props.rideData.ytdDistance, '0,0.00', 'big', this.props.rideData.isMetric)}</li>
					<li>Year to date elevation gain: {formatNumber(this.props.rideData.ytdElevation, '0,0.00', 'small', this.props.rideData.isMetric)}</li>
				</ul>
			
				<ul class="averageYearToDate">
					<li>Average distance per day YTD: {formatNumber(this.props.rideData.ytdDistancePerDay, '0,0', 'big', this.props.rideData.isMetric)}</li>
					<li>Average elevation gain per day YTD: {formatNumber(this.props.rideData.ytdElevationPerDay, '0,0', 'small', this.props.rideData.isMetric)}</li>
					<li>Average distance per week YTD: {formatNumber(this.props.rideData.ytdDistancePerWeek, '0,0', 'big', this.props.rideData.isMetric)}</li>
					<li>Average elevation gain per week YTD: {formatNumber(this.props.rideData.ytdElevationPerWeek, '0,0', 'small', this.props.rideData.isMetric)}</li>
				</ul>
				
				<ul class="currentProjection">
					<li>Days left in year: {this.props.rideData.daysLeftInYear}</li>
					<li>Projected annual distance: {formatNumber(this.props.rideData.projectedAnnualDistance, '0,0', 'big', this.props.rideData.isMetric)}</li>
					<li>Projected annual elevation: {formatNumber(this.props.rideData.projectedAnnualElevation, '0,0', 'small', this.props.rideData.isMetric)}</li>
				</ul>
			
			</div>
		);
	}
	
});