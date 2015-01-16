// Gets the number in a format we want
function formatNumber(meters, format, scale, isMetric) {
	
	var factor, distance;
	
	// Switch based on scale and system
	if (scale === 'big') {
		units = (isMetric) ? 'km' : 'mi';
		distance = (isMetric) ? meters/1000 : ((meters/1000) * 0.6214);
	} else {
		units = (isMetric) ? 'm' : 'ft';
		distance = (isMetric) ? meters : (meters * 3.28084);
	}
	
	// Format it
	return numeral(distance).format(format) + units;
	
};


	

	
	// // Work out the projections
	// $('.annualGoalDistance').bind('input propertychange', function() {
	//
	// 	// And convert to meters
	// 	var annualGoalDistance = $('.annualGoalDistance').val() * 1000;
	//
	// 	// Come on, it's got to be a number
	// 	if (isNaN(annualGoalDistance)) {
	// 		alert("Must be a number");
	// 		$('.annualGoalDistance').val('');
	// 	}
	//
	// 	// Work things out
	// 	var distanceLeftToHitTarget = annualGoalDistance - rideData.ytdDistance,
	// 	    requiredDistancePerDay = (annualGoalDistance > rideData.ytdDistance) ? (distanceLeftToHitTarget / rideData.daysLeftInYear) / 1000 : 0,
	// 	    requiredDistancePerWeek = (annualGoalDistance > rideData.ytdDistance) ? (requiredDistancePerDay * 7) : 0,
	// 	    distancePerDayDifference = (requiredDistancePerDay > 0) ? (requiredDistancePerDay / 1000 - rideData.ytdDistancePerDay) : 0,
	// 	    distancePerWeekDifference = (requiredDistancePerWeek > 0) ? (requiredDistancePerWeek / 1 - rideData.ytdDistancePerWeek) / 1000 : 0;
	//
	// 	// Put them in the page
	// 	$(".requiredDistancePerDay").text(requiredDistancePerDay);
	// 	$(".requiredDistancePerWeek").text(requiredDistancePerWeek);
	// 	$(".distancePerDayDifference").text(distancePerDayDifference);
	// 	$(".distancePerWeekDifference").text(distancePerWeekDifference);
	//
	// });
	//
	// // now this will fetch <path/to/templates/content.hbs>
	// // $('#some-element').render('content', {
	// //     // ...
	// // });
