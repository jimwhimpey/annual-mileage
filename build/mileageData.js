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
					React.createElement("li", null, React.createElement("span", {className: "data"}, formatNumber(this.props.rideData.ytdDistance, '0,0', 'big', this.state.isMetric)), " This year's distance"), 
					React.createElement("li", null, React.createElement("span", {className: "data"}, formatNumber(this.props.rideData.ytdElevation, '0,0', 'small', this.state.isMetric)), " This year's elevation gain")
				), 
			
				React.createElement("ul", {className: "averageYearToDate"}, 
					React.createElement("li", null, React.createElement("span", {className: "data"}, formatNumber(this.props.rideData.ytdDistancePerDay, '0,0', 'big', this.state.isMetric)), " Average distance per day this year"), 
					React.createElement("li", null, React.createElement("span", {className: "data"}, formatNumber(this.props.rideData.ytdElevationPerDay, '0,0', 'small', this.state.isMetric)), " Average elevation gain per day this year"), 
					React.createElement("li", null, React.createElement("span", {className: "data"}, formatNumber(this.props.rideData.ytdDistancePerWeek, '0,0', 'big', this.state.isMetric)), " Average distance per week this year"), 
					React.createElement("li", null, React.createElement("span", {className: "data"}, formatNumber(this.props.rideData.ytdElevationPerWeek, '0,0', 'small', this.state.isMetric)), " Average elevation gain per week this year")
				), 
				
				React.createElement("ul", {className: "currentProjection"}, 
					React.createElement("li", null, React.createElement("span", {className: "data"}, this.props.rideData.daysLeftInYear), " Days left in year"), 
					React.createElement("li", null, React.createElement("span", {className: "data"}, formatNumber(this.props.rideData.projectedAnnualDistance, '0,0', 'big', this.state.isMetric)), " Projected annual distance"), 
					React.createElement("li", null, React.createElement("span", {className: "data"}, formatNumber(this.props.rideData.projectedAnnualElevation, '0,0', 'small', this.state.isMetric)), " Projected annual elevation gain")
				)
			
			)
		);
	}
	
});