/* SET RANDOM LOADER COLORS FOR DEMO PURPOSES */	
	// Call function to load array of images
	
	/* WHEN LOADED */
	
	$('#google-signin').click(function() {
		
		var request = $.ajax({
			method: "GET",
			url: "http://127.0.0.1:8000/run"
		}).done(function(data) {
    			if ( console && console.log ) {
      				console.log( "Sample of data:", data);
    			}

		    	d3.json('mgdata/result.json', function(data) {
	
			    for (var i = 0; i < data.length; i++) {
	        		data[i] = MG.convert.date(data[i], 'date');
	 		    }

		    	MG.data_graphic({
        			title: "Topics Over Time",
        			description: 'Setting missing_is_hidden works with multiple lines too.',
        			data: data,
        			width: 600,
        			height: 500,
        			right: 40,
        			missing_is_hidden: true,
       				target: '#missing_is_hidden_multi',
        			show_secondary_x_label: false
    			});
			});

			d3.json('mgdata/0.json', function(data) {

		    		data = MG.convert.date(data, 'date');
		    	MG.data_graphic({
		        	title: "Topic 1",
		        	description: "This is a simple line chart. You can remove the area portion by adding area: false to the arguments list.",
		       		data: data,
		        	width: 600,
		        	height: 200,
		        	right: 40,
		        	target: document.getElementById('fake_users1'),
		        	x_accessor: 'date',
		        	y_accessor: 'value'
		    	});
			});

		    	d3.json('mgdata/1.json', function(data) {

		    		data = MG.convert.date(data, 'date');
		    	MG.data_graphic({
		        	title: "Topic 2",
		        	description: "This is a simple line chart. You can remove the area portion by adding area: false to the arguments list.",
		        	data: data,
		        	width: 600,
		        	height: 200,
		        	right: 40,
		        	target: document.getElementById('fake_users2'),
		        	x_accessor: 'date',
		        	y_accessor: 'value'
		    	});
			});

		    	d3.json('mgdata/2.json', function(data) {

		    		data = MG.convert.date(data, 'date');
		    	MG.data_graphic({
		        	title: "Topic 3",
		        	description: "This is a simple line chart. You can remove the area portion by adding area: false to the arguments list.",
		        	data: data,
		        	width: 600,
		        	height: 200,
		        	right: 40,
		        	target: document.getElementById('fake_users3'),
		        	x_accessor: 'date',
		        	y_accessor: 'value'
		    	});
			});
		});

	
	});
