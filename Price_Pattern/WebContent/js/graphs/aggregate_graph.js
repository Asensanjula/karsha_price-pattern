function daily_aggrigation(ss) {
console.log(ss);
	var chart = c3.generate({
		 bindto: '#matrix',
		data : {
			url : '/Price_Pattern/getDetails/aggregateController/'+ss,
			mimeType : 'json',
			x : 'x',
			type : 'bar',
			
			keys : {
				x : 'date', // it's possible to specify 'x' when category axis
				value : [ 'maxCount','diffGain',  'peakGain','minCount','diffLoss', 'peakLoss'],
				//value : [ 'peak_gain', 'peak_loss',],
				//value : ['max_count','min_count'],
			},
			types: {
				maxCount:'line',//here i put this because i want to hide these in graphs (tricky)
				minCount:'line',
				minCount:'line',
				
				
	        },
			//hide:['peak_gain','peak_loss',],
		//	groups : [ [  'diff_gain', 'diff_loss' ,'peak_gain', 'peak_loss'] ],
			colors: {
				//peak_gain: '#00ff00',
				//peak_loss: '#ff0f0f',
				diff_gain: ' #00ff00',
				diff_loss: ' #ff0f0f'
	        },
	        

	        	
	        

		},
		

		zoom : {
			enabled : true,
			rescale : true
		},
		axis : {
			x : {
				type : 'timeseries',
				label : {
					text : 'date',
					position : 'outer-end'
				},
				tick : {
					format : '%Y-%m-%d'
				}
			},

			y : {
				label : {
					text : 'Gain / Loss $',
					position : 'outer-top'
				},
				max: 80000000000,
	           min: -80000000000,
				tick: {
	                format: d3.format("$s")
	            }
			},
			
			 
		},
		
		tooltip : {
		format : {
			value: function (value, ratio, id) {
		        	 var formatMeA = id === 'peakGain'  || id==='diffGain' ? value = (value/1000000000).toFixed(2)+" B$" : value;
		        	 var formatMeA = id === 'minCount'  ? value =value*-1 : value;
		        	 var formatMeA = id==='peakLoss' || id==='diffLoss'  ? value = -1*(value/1000000000).toFixed(2)+" B$" : value;
		        	 return value;
		           }
			},
			contents: tooltip_contents

		},
		
		legend: {
	        hide: ['peakGain','peakLoss','maxCount','minCount']
	    },
		
	});
	
	
}



function tooltip_contents(d, defaultTitleFormat, defaultValueFormat, color) {
	
    var $$ = this, config = $$.config, CLASS = $$.CLASS,
        titleFormat = config.tooltip_format_title || defaultTitleFormat,
        nameFormat = config.tooltip_format_name || function (name) { return name; },
        valueFormat = config.tooltip_format_value || defaultValueFormat,
        text, i, title, value, name, bgcolor;
    
    // You can access all of data like this:
    //console.log($$.data.targets);
    console.log(d);
    
    for (i = 0; i < d.length; i++) {
        if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

        // ADD
    //    if (d[i].name === 'diff_loss') { continue; }
        
        if (! text) {
        	title = titleFormat ? titleFormat(d[i].x) : d[i].x;
            text = "<table class='" + CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
        }

        name = nameFormat(d[i].name);
        value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
        bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

        text += "<tr class='" + CLASS.tooltipName + "-" + d[i].id + "'>";
        text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
        text += "<td class='value'>" + value + "</td>";
        text += "</tr>";
    }
    return text + "</table>";   
}
