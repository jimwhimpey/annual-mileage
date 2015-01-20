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
				<li><a onClick={this.handleChange.bind(null, true)}>metric</a></li>
				<li><a onClick={this.handleChange.bind(null, false)}>imperial</a></li>
			</ul>
		);
	}
	
});