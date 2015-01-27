var MileageProjector = React.createClass({
	
	displayName: 'MileageProjector',
	
	getInitialState: function() {
		return {
			requiredPerDay: 0,
			goalDistance: 0
		};
	},
	
	handleDistanceGoal: function(e) {
		
		// Set target value to the right amount of meters
		// var valueEntered = (this.props.isMetric) ?
		
		this.setState({
			requiredPerDay: (e.target.value * 1000 - this.props.rideData.ytdDistance) / this.props.rideData.daysLeftInYear
		});
		
	},
	
	componentDidUpdate: function(prevProps, prevState) {
		
		// Update the input fields as the units change
		if (this.props.isMetric && !prevProps.isMetric) {
			this.refs.annualGoalDistance.getDOMNode().value = Math.floor(this.refs.annualGoalDistance.getDOMNode().value * 1.609344);
		} else if (!this.props.isMetric && prevProps.isMetric) {
			this.refs.annualGoalDistance.getDOMNode().value = Math.floor(this.refs.annualGoalDistance.getDOMNode().value * 0.6213711922);
		}
		
	},
	
	render: function() {
		
		var bigUnits = (this.props.isMetric) ? "km" : "mi",
		    smallUnits = (this.props.isMetric) ? "m" : "ft";
		
		return (
			
			<div className="mileageProjector">
			
				<p>Annual goal distance: <input type="text" onChange={this.handleDistanceGoal} class="annualGoalDistance" ref="annualGoalDistance" />{bigUnits}</p>

				<ul>
					<li>Required distance per day: <span class="requiredDistancePerDay">{formatNumber(this.state.requiredPerDay, '0,0.00', 'big', this.props.isMetric)}</span></li>
					<li>Current distance per day difference: <span class="distancePerDayDifference"></span></li>
					<li>Required distance per week: <span class="requiredDistancePerWeek"></span></li>
					<li>Current distance per week difference: <span class="distancePerWeekDifference"></span></li>
				</ul>

				<p>Annual goal elevation gain: <input type="text" class="annualGoalElevation" />{smallUnits}</p>

				<ul>
					<li>Required elevation gain per day: <span class="requiredElevationPerDay"></span></li>
					<li>Required elevation gain per week: <span class="requiredElevationPerWeek"></span></li>
				</ul>
			
			</div>

		);
	}
	
});