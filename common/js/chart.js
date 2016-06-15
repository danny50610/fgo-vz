﻿    google.load('visualization', '1.1', { 'packages': ['corechart'], 'language': 'zh' });
    //google.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Lv');
      data.addColumn('number', 'ATK');
      data.addColumn('number', 'HP');

	for(var i in master.mstSvt)
	{
		if(master.mstSvt[i].id==svtid.value)break;
	}
	for(var j in master.mstSvtLimit)
	{
		if(master.mstSvtLimit[j].svtId==svtid.value&&master.mstSvtLimit[j].limitCount==master.mstSvt[i].limitMax)break;
	}
	/*if(j==master.mstSvtLimit.length-1)
		for(var j in master.mstSvtLimit)
		{
			if(master.mstSvtLimit[j].svtId==svtid.value&&master.mstSvtLimit[j].limitCount==0)break;
		}*/
	for(var c in master.mstSvtExp){
		if(master.mstSvt[i].expType==master.mstSvtExp[c].type&&master.mstSvtExp[c].lv<=master.mstSvtLimit[j].lvMax&&master.mstSvtExp[c].lv>0)
			data.addRows([[master.mstSvtExp[c].lv,Math.floor(master.mstSvtLimit[j].atkBase+(master.mstSvtLimit[j].atkMax-master.mstSvtLimit[j].atkBase)*master.mstSvtExp[c].curve/1000),Math.floor(master.mstSvtLimit[j].hpBase+(master.mstSvtLimit[j].hpMax-master.mstSvtLimit[j].hpBase)*master.mstSvtExp[c].curve/1000)]]);
	}
      var options = {
          title: '二圍曲線圖',
          curveType: 'function',
          //legend: { position: 'bottom' },
		  hAxis: {format: 'Lv###',},
        width: 900,
        height: 500
      };

		var container = document.getElementById('chart_div');
		var chart = new window.google.visualization.LineChart(container);

      chart.draw(data, options);
    }