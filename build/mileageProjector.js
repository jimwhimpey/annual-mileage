var MileageProjector = React.createClass({
	
	displayName: 'MileageProjector',
	
	getInitialState: function() {
		return {
			requiredPerDay: 0
		};
	},
	
	handleDistanceGoal: function(e) {
		
		this.setState({
			requiredPerDay: (e.target.value * 1000 - this.props.rideData.ytdDistance) / this.props.rideData.daysLeftInYear
		});
		
	},
	
	render: function() {
		
		var bigUnits = (this.props.isMetric) ? "km" : "mi",
		    smallUnits = (this.props.isMetric) ? "m" : "ft";
		
		return (
			
			React.createElement("div", {className: "mileageProjector"}, 
			
				React.createElement("p", null, "Annual goal distance: ", React.createElement("input", {type: "text", onChange: this.handleDistanceGoal, class: "annualGoalDistance"}), bigUnits), 

				React.createElement("ul", null, 
					React.createElement("li", null, "Required distance per day: ", React.createElement("span", {class: "requiredDistancePerDay"}, formatNumber(this.state.requiredPerDay, '0,0.00', 'big', this.props.isMetric))), 
					React.createElement("li", null, "Current distance per day difference: ", React.createElement("span", {class: "distancePerDayDifference"})), 
					React.createElement("li", null, "Required distance per week: ", React.createElement("span", {class: "requiredDistancePerWeek"})), 
					React.createElement("li", null, "Current distance per week difference: ", React.createElement("span", {class: "distancePerWeekDifference"}))
				), 

				React.createElement("p", null, "Annual goal elevation gain: ", React.createElement("input", {type: "text", class: "annualGoalElevation"}), smallUnits), 

				React.createElement("ul", null, 
					React.createElement("li", null, "Required elevation gain per day: ", React.createElement("span", {class: "requiredElevationPerDay"})), 
					React.createElement("li", null, "Required elevation gain per week: ", React.createElement("span", {class: "requiredElevationPerWeek"}))
				)
			
			)

		);
	}
	
});