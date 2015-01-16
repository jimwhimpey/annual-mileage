var PageContent = React.createClass({displayName: "PageContent",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement(UnitSwitcher, null), 
				React.createElement(MileageData, {rideData: rideData})
			)
		);
	}
});