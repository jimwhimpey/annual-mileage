$(function(){
	
	$.handlebars({
		templatePath: '/views',
		templateExtension: 'hbs'
	});

	// now this will fetch <path/to/templates/content.hbs>
	// $('#some-element').render('content', {
	//     // ...
	// });

});