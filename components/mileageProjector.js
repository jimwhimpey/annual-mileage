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
			
			<div className="mileageProjector">
			
				<p>Annual goal distance: <input type="text" onChange={this.handleDistanceGoal} class="annualGoalDistance" />{bigUnits}</p>

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