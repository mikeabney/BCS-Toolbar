BCS_Bar = {
	'sites' : [
		{
			'name' : 'Refresh BCS',
			'url' : 'http://refreshbcs.org',
			'description' : 'This is what Refresh is all about, right here.'
		},
		{
			'name' : 'AgileBCS',
			'url' : 'http://agilebcs.org',
			'description' : 'A local group that gets together to discuss software development in general and Agile and Lean practices and methods in particular.'
		},
		{
			'name' : 'Refresh BCS',
			'url' : 'http://refreshbcs.org',
			'description' : 'This is what Refresh is all about, right here.'
		},
		{
			'name' : 'AgileBCS',
			'url' : 'http://agilebcs.org',
			'description' : 'A local group that gets together to discuss software development in general and Agile and Lean practices and methods in particular.'
		},
		{
			'name' : 'Refresh BCS',
			'url' : 'http://refreshbcs.org',
			'description' : 'This is what Refresh is all about, right here.'
		},
		{
			'name' : 'AgileBCS',
			'url' : 'http://agilebcs.org',
			'description' : 'A local group that gets together to discuss software development in general and Agile and Lean practices and methods in particular.'
		} /*,
		{
			'name' : 'Refresh BCS',
			'url' : 'http://refreshbcs.org',
			'description' : 'This is what Refresh is all about, right here.'
		},
		{
			'name' : 'AgileBCS',
			'url' : 'http://agilebcs.org',
			'description' : 'A local group that gets together to discuss software development in general and Agile and Lean practices and methods in particular.'
		},
		{
			'name' : 'Refresh BCS',
			'url' : 'http://refreshbcs.org',
			'description' : 'This is what Refresh is all about, right here.'
		},
		{
			'name' : 'AgileBCS',
			'url' : 'http://agilebcs.org',
			'description' : 'A local group that gets together to discuss software development in general and Agile and Lean practices and methods in particular.'
		},
		{
			'name' : 'Refresh BCS',
			'url' : 'http://refreshbcs.org',
			'description' : 'This is what Refresh is all about, right here.'
		},
		{
			'name' : 'AgileBCS',
			'url' : 'http://agilebcs.org',
			'description' : 'A local group that gets together to discuss software development in general and Agile and Lean practices and methods in particular.'
		} */
	],
	'generateHtml' : function() {
		var html = '<div id="bcs-bar"><ul>';
		for (site in BCS_Bar.sites) {
			html += '<li class="menu"><a href="' + BCS_Bar.sites[site].url + '">' +
					BCS_Bar.sites[site].name +
					'<span>' + BCS_Bar.sites[site].description + 
					'</span></a></li>';
		}
		
		html += '<li class="select">Go to BCS Group: <select>'
		for (site in BCS_Bar.sites) {
			html += '<option value="' + BCS_Bar.sites[site].url + '">' +
					BCS_Bar.sites[site].name +
					'</option>';
		}
		html += '</select></li>';
		
		html += '<li id="right"><a class="button" href="http://google.com">Calendar</a><a id="bcs-more" href="http://bcstech.org">More Groups</a></li></ul></div>';
		return html;
	},
	'insert_bar' : function() {
		//jQuery('head').append('<link rel="stylesheet" href="css/bcs-bar.css">');
		jQuery('body').prepend(BCS_Bar.generateHtml());
		jQuery('#bcs-bar ul li a')
			.hover(function() {
				jQuery(this).children().stop(true, true).slideToggle();
			});
		jQuery('#bcs-bar ul li select').change(function() {
			window.location = jQuery(this).find("option:selected").val();
		});
	}
};

jQuery(window).load(function () {
	BCS_Bar.insert_bar();
});