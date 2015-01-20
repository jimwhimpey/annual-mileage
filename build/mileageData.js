var MileageData = React.createClass({
	
	displayName: 'MileageData',
	
	componentDidMount: function() {
		this.setState({
			rideData: rideData,
			isMetric: isMetric
		});
	},
	
	render: function() {
		return (
			React.createElement("div", {className: "mileageData"}, 
			
				React.createElement("ul", {class: "yearToDate"}, 
					React.createElement("li", null, "Year to date distance: ", formatNumber(this.props.rideData.ytdDistance, '0,0.00', 'big', this.props.isMetric)), 
					React.createElement("li", null, "Year to date elevation gain: ", formatNumber(this.props.rideData.ytdElevation, '0,0.00', 'small', this.props.isMetric))
				), 
			
				React.createElement("ul", {class: "averageYearToDate"}, 
					React.createElement("li", null, "Average distance per day YTD: ", formatNumber(this.props.rideData.ytdDistancePerDay, '0,0', 'big', this.props.isMetric)), 
					React.createElement("li", null, "Average elevation gain per day YTD: ", formatNumber(this.props.rideData.ytdElevationPerDay, '0,0', 'small', this.props.isMetric)), 
					React.createElement("li", null, "Average distance per week YTD: ", formatNumber(this.props.rideData.ytdDistancePerWeek, '0,0', 'big', this.props.isMetric)), 
					React.createElement("li", null, "Average elevation gain per week YTD: ", formatNumber(this.props.rideData.ytdElevationPerWeek, '0,0', 'small', this.props.isMetric))
				), 
				
				React.createElement("ul", {class: "currentProjection"}, 
					React.createElement("li", null, "Days left in year: ", this.props.rideData.daysLeftInYear), 
					React.createElement("li", null, "Projected annual distance: ", formatNumber(this.props.rideData.projectedAnnualDistance, '0,0', 'big', this.props.isMetric)), 
					React.createElement("li", null, "Projected annual elevation: ", formatNumber(this.props.rideData.projectedAnnualElevation, '0,0', 'small', this.props.isMetric))
				)
			
			)
		);
	}
	
});