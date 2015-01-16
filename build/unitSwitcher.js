var UnitSwitcher = React.createClass({displayName: "UnitSwitcher",
	
	handleClick: function(e) {
		
		e.preventDefault();
		
		console.log("e", e);
		
		return;
	},
	
	render: function() {
		return (
			React.createElement("ul", {class: "unit-switcher"}, 
				React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.handleClick}, "metric")), 
				React.createElement("li", null, React.createElement("a", {href: "#", onClick: this.handleClick}, "imperial"))
			)
		);
	}
	
});