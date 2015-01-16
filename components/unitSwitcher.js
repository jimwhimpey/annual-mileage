var UnitSwitcher = React.createClass({
	
	handleClick: function(e) {
		
		e.preventDefault();
		
		console.log("e", e);
		
		return;
	},
	
	render: function() {
		return (
			<ul class="unit-switcher">
				<li><a href="#" onClick={this.handleClick}>metric</a></li>
				<li><a href="#" onClick={this.handleClick}>imperial</a></li>
			</ul>
		);
	}
	
});