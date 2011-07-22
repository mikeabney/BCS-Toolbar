(function() {
	/********* The BCS Community Sites *********/
	var sites = [
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
		}
	];

	// Localize jQuery variable
	var jQuery;
	
	/******** Load jQuery if not present *********/
	if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.6.2') {
		var script_tag = document.createElement('script');
		script_tag.setAttribute("type", "text/javascript");
		script_tag.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js");
		// Set onLoad for most browsers
		script_tag.onload = jQueryLoadedHandler;
		// Same thing for IE
		script_tag.onreadystatechange = function () {
	        if (this.readyState == 'complete' || this.readyState == 'loaded') {
	            jQueryLoadedHandler();
	        }
	    };
	    // Try to find the head, otherwise default to the documentElement
	    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
	}
	else {
	    // The jQuery version on the window is the one we want to use
	    jQuery = window.jQuery;
	    insertBar();
	}

	function jQueryLoadedHandler() {
		// Restore everyone else's jQuery version.
	    jQuery = window.jQuery.noConflict(true);
	    insertBar();
	}
	
	function generateHtml() {
		var html = '<div id="bcs-bar"><ul>';
		for (site in sites) {
			html += '<li class="menu"><a href="' + sites[site].url + '">' +
					sites[site].name +
					'<span>' + sites[site].description + 
					'</span></a></li>';
		}
		
		html += '<li class="select"><select><option selected="selected">More BCS Groups...</option>'
		for (site in sites) {
			html += '<option value="' + sites[site].url + '">' +
					sites[site].name +
					'</option>';
		}
		html += '</select></li>';
		
		html += '<li id="right"><a class="button" href="http://google.com">Calendar</a><a id="bcs-more" href="http://bcstech.org">More BCS Groups</a></li></ul></div>';
		return html;
	}
	
	function insertBar() {
		jQuery('head').append('<link rel="stylesheet" href="css/bcs-bar.css">');
		jQuery('body').prepend(generateHtml());
		jQuery('#bcs-bar ul li a')
			.hover(function() {
				jQuery(this).children().stop(true, true).slideToggle();
			});
		jQuery('#bcs-bar ul li select').change(function() {
			window.location = jQuery(this).find("option:selected").val();
		});
	}
})();