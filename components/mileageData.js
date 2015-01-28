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
					<li><span className="data">{formatNumber(this.props.rideData.ytdDistance, '0,0', 'big', this.state.isMetric)}</span> This year's distance</li>
					<li><span className="data">{formatNumber(this.props.rideData.ytdElevation, '0,0', 'small', this.state.isMetric)}</span> This year's elevation gain</li>
				</ul>
			
				<ul className="averageYearToDate">
					<li><span className="data">{formatNumber(this.props.rideData.ytdDistancePerDay, '0,0', 'big', this.state.isMetric)}</span> Average distance per day this year</li>
					<li><span className="data">{formatNumber(this.props.rideData.ytdElevationPerDay, '0,0', 'small', this.state.isMetric)}</span> Average elevation gain per day this year</li>
					<li><span className="data">{formatNumber(this.props.rideData.ytdDistancePerWeek, '0,0', 'big', this.state.isMetric)}</span> Average distance per week this year</li>
					<li><span className="data">{formatNumber(this.props.rideData.ytdElevationPerWeek, '0,0', 'small', this.state.isMetric)}</span> Average elevation gain per week this year</li>
				</ul>
				
				<ul className="currentProjection">
					<li><span className="data">{this.props.rideData.daysLeftInYear}</span> Days left in year</li>
					<li><span className="data">{formatNumber(this.props.rideData.projectedAnnualDistance, '0,0', 'big', this.state.isMetric)}</span> Projected annual distance</li>
					<li><span className="data">{formatNumber(this.props.rideData.projectedAnnualElevation, '0,0', 'small', this.state.isMetric)}</span> Projected annual elevation gain</li>
				</ul>
			
			</div>
		);
	}
	
});