var MileageContent = React.createClass({displayName: "MileageContent",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement(UnitSwitcher, null), 
				React.createElement(MileageData, {rideData: rideData})
			)
		);
	}
});