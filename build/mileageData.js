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
			React.createElement("div", {className: "mileageData"}, 
			
				React.createElement("ul", {className: "yearToDate"}, 
					React.createElement("li", null, "This year's distance: ", formatNumber(this.props.rideData.ytdDistance, '0,0.00', 'big', this.state.isMetric)), 
					React.createElement("li", null, "This year's elevation gain: ", formatNumber(this.props.rideData.ytdElevation, '0,0.00', 'small', this.state.isMetric))
				), 
			
				React.createElement("ul", {className: "averageYearToDate"}, 
					React.createElement("li", null, "Average distance per day this year: ", formatNumber(this.props.rideData.ytdDistancePerDay, '0,0', 'big', this.state.isMetric)), 
					React.createElement("li", null, "Average elevation gain per day this year: ", formatNumber(this.props.rideData.ytdElevationPerDay, '0,0', 'small', this.state.isMetric)), 
					React.createElement("li", null, "Average distance per week this year: ", formatNumber(this.props.rideData.ytdDistancePerWeek, '0,0', 'big', this.state.isMetric)), 
					React.createElement("li", null, "Average elevation gain per week this year: ", formatNumber(this.props.rideData.ytdElevationPerWeek, '0,0', 'small', this.state.isMetric))
				), 
				
				React.createElement("ul", {className: "currentProjection"}, 
					React.createElement("li", null, "Days left in year: ", this.props.rideData.daysLeftInYear), 
					React.createElement("li", null, "Projected annual distance: ", formatNumber(this.props.rideData.projectedAnnualDistance, '0,0', 'big', this.state.isMetric)), 
					React.createElement("li", null, "Projected annual elevation: ", formatNumber(this.props.rideData.projectedAnnualElevation, '0,0', 'small', this.state.isMetric))
				)
			
			)
		);
	}
	
});