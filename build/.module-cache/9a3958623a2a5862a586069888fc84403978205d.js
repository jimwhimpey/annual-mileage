var UnitSwitcher = React.createClass({displayName: "UnitSwitcher",
	render: function() {
		return (
			React.createElement("ul", {class: "unit-switcher"}, 
				React.createElement("li", null, React.createElement("a", {href: "/"}, "metric")), 
				React.createElement("li", null, React.createElement("a", {href: "/"}, "imperial"))
			)
		);
	}
});