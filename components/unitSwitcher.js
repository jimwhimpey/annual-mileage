var UnitSwitcher = React.createClass({
	
	componentDidMount: function() {
		this.setState({isMetric: isMetric});
	},
	
	handleChange: function(e) {
		this.props.handleChange(e);
	},
	
	render: function() {
		return (
			<ul class="unit-switcher">
				<li><button onClick={this.handleChange.bind(null, true)}>metric</button></li>
				<li><button onClick={this.handleChange.bind(null, false)}>imperial</button></li>
			</ul>
		);
	}
	
});