var MileageContent = React.createClass({
	render: function() {
		return (
			<div>
				<UnitSwitcher />
				<MileageData rideData={rideData} />
			</div>
		);
	}
});