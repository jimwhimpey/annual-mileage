var MileageProjector = React.createClass({
	
	displayName: 'MileageProjector',
	
	getInitialState: function() {
		return {
			requiredDistancePerDay: 0,
			distancePerDayDifference: 0,
			requiredElevationPerDay: 0,
			elevationPerDayDifference: 0,
			isMetric: this.props.isMetric
		};
	},
	
	handleDistanceGoal: function(e) {
		
		var goalInMeters = (this.props.isMetric) ? e.target.value * 1000 : e.target.value * 1.609344 * 1000,
		    requiredDistancePerDay = (goalInMeters - this.props.rideData.ytdDistance) / this.props.rideData.daysLeftInYear;
		
		this.setState({
			requiredDistancePerDay: requiredDistancePerDay,
			distancePerDayDifference: requiredDistancePerDay - this.props.rideData.ytdDistancePerDay
		});
		
	},
	
	handleElevationGoal: function(e) {
		
		var goalInMeters = (this.props.isMetric) ? e.target.value : e.target.value * 0.3048,
		    requiredElevationPerDay = (goalInMeters - this.props.rideData.ytdElevation) / this.props.rideData.daysLeftInYear;
		
		this.setState({
			requiredElevationPerDay: requiredElevationPerDay,
			elevationPerDayDifference: requiredElevationPerDay - this.props.rideData.ytdElevationPerDay
		});
		
	},
	
	componentDidUpdate: function(prevProps, prevState) {
		
		// Update the input fields as the units change
		if (this.refs.annualGoalDistance.getDOMNode().value !== "") {
			if (this.props.isMetric && !prevProps.isMetric) {
				this.refs.annualGoalDistance.getDOMNode().value = Math.floor(this.refs.annualGoalDistance.getDOMNode().value * 1.609344);
			} else if (!this.props.isMetric && prevProps.isMetric) {
				this.refs.annualGoalDistance.getDOMNode().value = Math.floor(this.refs.annualGoalDistance.getDOMNode().value * 0.6213711922);
			}
		}
		
		if (this.refs.annualGoalElevation.getDOMNode().value !== "") {
			if (this.props.isMetric && !prevProps.isMetric) {
				this.refs.annualGoalElevation.getDOMNode().value = Math.floor(this.refs.annualGoalElevation.getDOMNode().value * 0.3048);
			} else if (!this.props.isMetric && prevProps.isMetric) {
				this.refs.annualGoalElevation.getDOMNode().value = Math.floor(this.refs.annualGoalElevation.getDOMNode().value * 3.280839895);
			}
		}

	},
	
	render: function() {
		
		var bigUnits = (this.props.isMetric) ? "km" : "mi",
		    smallUnits = (this.props.isMetric) ? "m" : "ft";
		
		return (
			
			React.createElement("div", {className: "mileageProjector"}, 
			
				React.createElement("p", null, "Annual goal distance: ", React.createElement("input", {type: "text", onChange: this.handleDistanceGoal, class: "annualGoalDistance", ref: "annualGoalDistance"}), bigUnits), 

				React.createElement("ul", null, 
					React.createElement("li", null, "Required distance per day: ", React.createElement("span", {class: "requiredDistancePerDay"}, formatNumber(this.state.requiredDistancePerDay, '0,0.00', 'big', this.props.isMetric))), 
					React.createElement("li", null, "Current distance per day difference: ", React.createElement("span", {class: "distancePerDayDifference"}, formatNumber(this.state.distancePerDayDifference, '0,0.00', 'big', this.props.isMetric))), 
					React.createElement("li", null, "Required distance per week: ", React.createElement("span", {class: "requiredDistancePerWeek"}, formatNumber(this.state.requiredDistancePerDay * 7, '0,0.00', 'big', this.props.isMetric))), 
					React.createElement("li", null, "Current distance per week difference: ", React.createElement("span", {class: "distancePerWeekDifference"}, formatNumber(this.state.distancePerDayDifference * 7, '0,0.00', 'big', this.props.isMetric)))
				), 

				React.createElement("p", null, "Annual goal elevation gain: ", React.createElement("input", {type: "text", onChange: this.handleElevationGoal, class: "annualGoalElevation", ref: "annualGoalElevation"}), smallUnits), 

				React.createElement("ul", null, 
					React.createElement("li", null, "Required elevation gain per day: ", React.createElement("span", {class: "requiredElevationPerDay"}, formatNumber(this.state.requiredElevationPerDay, '0,0', 'small', this.props.isMetric))), 
					React.createElement("li", null, "Current elevation per day difference: ", React.createElement("span", {class: "elevationPerDayDifference"}, formatNumber(this.state.elevationPerDayDifference, '0,0', 'small', this.props.isMetric))), 
					React.createElement("li", null, "Required elevation gain per week: ", React.createElement("span", {class: "requiredElevationPerWeek"}, formatNumber(this.state.requiredElevationPerDay * 7, '0,0', 'small', this.props.isMetric))), 
					React.createElement("li", null, "Current elevation per week difference: ", React.createElement("span", {class: "elevationPerWeekDifference"}, formatNumber(this.state.elevationPerDayDifference * 7, '0,0', 'small', this.props.isMetric)))
				)
			
			)

		);
	}
	
});