var chart = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x','2013-01-07', '2013-01-08', '2013-01-09', '2013-01-10', '2013-01-11', '2013-01-12', '2013-01-13', '2013-01-14', '2013-01-15', '2013-01-16', '2013-01-17'
            , '2013-01-18', '2013-01-19', '2013-01-20', '2013-01-21', '2013-01-22', '2013-01-23', '2013-01-24', '2013-01-25', '2013-01-26', '2013-01-27', '2013-01-28'
            , '2013-01-29', '2013-01-30', '2013-01-31', '2013-02-01', '2013-02-02', '2013-02-03', '2013-02-04', '2013-02-05', '2013-02-06', '2013-02-07', '2013-02-08'
            , '2013-02-09', '2013-02-10', '2013-02-11', '2013-02-12', '2013-02-13', '2013-02-14', '2013-02-15', '2013-02-16', '2013-02-17', '2013-02-18', '2013-02-19'
            , '2013-02-20', '2013-02-21', '2013-02-22', '2013-02-23', '2013-02-24', '2013-02-25', '2013-02-26', '2013-02-27', '2013-02-28', '2013-03-01', '2013-03-02'
            , '2013-03-03', '2013-03-04', '2013-03-05', '2013-03-06', '2013-03-07', '2013-03-08', '2013-03-09', '2013-03-10', '2013-03-11', '2013-03-12', '2013-03-13'
            , '2013-03-14', '2013-03-15', '2013-03-16', '2013-03-17', '2013-03-18', '2013-03-19', '2013-03-20', '2013-03-21', '2013-03-22', '2013-03-23', '2013-03-24'
            , '2013-03-25', '2013-03-26', '2013-03-27'],
			
            ['Gain', 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50
            , 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50
            , 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50
            , 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50
            , 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50],
			
            ['Lost', -200, -130, -90, -240, -130, -220, -200, -130, -90, -240, -130, -220, -200, -130, -90, -240, -130, -220
            , -200, -130, -90, -240, -130, -220, -200, -130, -90, -240, -130, -220, -200, -130, -90, -240, -130, -220
            , -200, -130, -90, -240, -130, -220, -200, -130, -90, -240, -130, -220, -200, -130, -90, -240, -130, -220
            , -200, -130, -90, -240, -130, -220, -200, -130, -90, -240, -130, -220, -200, -130, -90, -240, -130, -220
            , -200, -130, -90, -240, -130, -220, -200, -130, -90, -240, -130, -220, -200, -130, -90, -240, -130, -220]
        ],
        type: 'bar',
        colors: {
            Gain: '#00ff00',
            Lost: '#ff0f0f'
        },
        groups: [
            ['Gain','Lost']
        ]
    },
    axis: {
        x: {
            label: {
                text: 'dates',
                position: 'outer-end'
            },
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        },
        
        y: {
            label:{
                text: 'Gain / Lost',
                position: 'outer-top'
            }
        }
    }
});
d3.select(chart.element).select('.' + c3.chart.internal.fn.CLASS.axisX).transition()
// and translate it to the y = 0 position
.attr('transform', "translate(" + 0 + "," + chart.internal.y(0) + ")")