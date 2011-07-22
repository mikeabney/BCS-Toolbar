(function() {
	/********* The BCS Community Sites *********/
	var sites = [
		{
			'name' : 'RefreshBCS',
			'url' : 'http://refreshbcs.org',
			'description' : 'A community of designers and developers working to refresh the creative, technical, and professional culture.'
		},
		{
			'name' : 'AgileBCS',
			'url' : 'http://agilebcs.org',
			'description' : 'For developers and leaders interested in Agile methodologies and practices.'
		},
		{
			'name' : 'Aggieland .NET UG',
			'url' : 'http://aggielanddnug.org',
			'description' : 'Our mission is to bring developers together to learn more about software development and the Microsoft .NET platform.'
		},
		{
			'name' : 'Brazos Valley Adobe UG',
			'url' : 'http://bvaug.org',
			'description' : 'A group for discussing and learning about the latest Adobe products and tips for using them effectively.'
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
		
		html += '<li id="right"><a class="button" href="http://www.google.com/calendar/embed?src=834sqblefa9b9vr7a24qtc9rkg%40group.calendar.google.com&ctz=America/Chicago">Calendar</a><a id="bcs-more" href="http://bccgroups.org">More BCS Groups</a></li></ul></div>';
		return html;
	}
	
	function insertBar() {
		jQuery('head').append('<link rel="stylesheet" href="http://mikeabney.com/bcs/css/bcs-bar.css">');
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