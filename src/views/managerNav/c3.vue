<template>
	<div>	<div id="message">
		<span id="demoMessage" class="el-button el-button" >Starting Demo..</span>
	</div>
    <div id="chart"></div>
    <div @click.prevent="startDemo"  class="el-button el-button--info" title="Start Demo">Start Demo</div>
    <div @click.prevent="stopDemo"  class="el-button el-button--primary" title="Stop Demo">Stop Demo</div>
</div>
</template>

<script>
  // import vuec3js from '../components/vuec3js';

  import 'c3/c3.min.css'

  import c3 from 'c3';

  export default {
  	name: '',
  	data(){
  		return {
  			timer:'',
  			defaultMessage: '',
  			currentIndex: 0,
  			duration: 1500,
  			demos: []
  		}
  	}, 
    mounted () {

    	let _seft = this;

    	let chart = c3.generate({
		    data: {
		        columns: [
		            ['data1', 30, 200, 100, 400, 150, 250, 50, 100, 250]
		        ],
		        selection: {
		            enabled: true
		        }
		    }
		});
		 
		// _seft.defaultMessage = document.getElementById('message').innerHTML;

		_seft.demos = [
		    function () {
		        chart.load({
		            columns: [['data2', 100, 30, 200, 320, 50, 150, 230, 80, 150]]
		        })
		        _seft.setMessage('Load data2');
		    },
		    function () {
		        chart.load({
		            columns: [['data3', 70, 90, 170, 220, 100, 110, 130, 40, 50]]
		        })
		        _seft.setMessage('Load data3');
		    },
		    function () {
		        chart.select(['data1'], [2]);
		        _seft.setMessage('Select point for index 2 of data1');
		    },
		    function () {
		        chart.select(['data1'], [4,6]);
		        _seft.setMessage('Select point for index 4,6 of data1');
		    },
		    function () {
		        chart.unselect();
		        _seft.setMessage('Unselect points');
		    },
		    function () {
		        chart.focus('data2');
		        _seft.setMessage('Focus on data2');
		    },
		    function () {
		        chart.focus('data3');
		        _seft.setMessage('Focus on data3');
		    },
		    function () {
		        chart.revert();
		        _seft.setMessage('Defocus');
		    },
		    function () {
		        chart.load({
		            columns: [['data1', 300, 230, 400, 520, 230, 250, 330, 280, 250]]
		        })
		        _seft.setMessage('Update data1');
		    },
		    function () {
		        chart.load({
		            columns: [['data2', 30, 50, 90, 120, 40, 50, 80, 70, 50]]
		        })
		        _seft.setMessage('Update data2');
		    },
		    function () {
		        chart.regions([{start:1,end:3}]);
		        _seft.setMessage('Add region from 1 to 3');
		        },
		    function () {
		        chart.regions.add([{start:6}]);
		        _seft.setMessage('Add region from 6 to end');
		    },
		    function () {
		        chart.regions([]);
		        _seft.setMessage('Clear regions');
		    },
		    function () {
		        chart.xgrids([{value: 1, text:'Label 1'}, {value: 4, text: 'Label 4'}]);
		        _seft.setMessage('Add x grid lines for 1, 4');
		    },
		    function () {
		        chart.ygrids.add([{value: 450, text:'Label 450'}]);
		        _seft.setMessage('Add y grid lines for 450');
		    },
		    function () {
		        chart.xgrids.remove({value: 1});
		        chart.xgrids.remove({value: 4});
		        _seft.setMessage('Remove grid lines for 1, 4');
		    },
		    function () {
		        chart.ygrids.remove({value: 450});
		        _seft.setMessage('Remove grid line for 450');
		    },
		    function () {
		        chart.transform('bar');
		        _seft.setMessage('Show as bar chart');
		    },
		    function () {
		        chart.groups([['data2','data3']]);
		        _seft.setMessage('Grouping data2 and data3');
		    },
		    function () {
		        chart.groups([['data1', 'data2', 'data3']]);
		        _seft.setMessage('Grouping data1, data2 and data3');
		    },
		    function () {
		        chart.groups([['data2', 'data3']]);
		        chart.transform('line', 'data1');
		        _seft.setMessage('Show data1 as line');
		    },
		    function () {
		        chart.unload({
		            ids: 'data3'
		        });
		        _seft.setMessage('Unload data3');
		    },
		    function () {
		        chart.unload({
		            ids: 'data2'
		        });
		        _seft.setMessage('Unload data2');
		    },
		    function () {
		        chart.flow({
		            columns: [
		                ['data1', 390, 400, 200, 500]
		            ],
		            duration: 1000,
		        });
		        _seft.setMessage('Flow 4 data');
		    },
		    function () {
		        // wait for end of transition for flow
		    },
		    function () {
		        chart.flow({
		            columns: [
		                ['data1', 190, 230]
		            ],
		        });
		        _seft.setMessage('Flow 2 data');
		    },
		    function () {
		        // wait for end of transition for flow
		    },
		    function () {
		        chart.transform('line', ['data1', 'data2', 'data3']);
		        chart.groups([['data1'], ['data2'], ['data3']]);
		        chart.load({
		            columns: [['data1', 30, 200, 100, 400, 150, 250, 50, 100, 250]]
		        })
		        _seft.setMessage('Starting Demo..');
		    }
		];

    },
    methods: {
    	setMessage: function (message) {
		    document.getElementById('demoMessage').innerHTML = message;
    	},
    	startDemo: function () {
    		let _seft = this;
    		// _seft.setMessage('Starting Demo..');
		    _seft.timer = setInterval(function(){
		        if (_seft.currentIndex == _seft.demos.length) _seft.currentIndex = 0;
		        _seft.demos[_seft.currentIndex++]();
		    }, _seft.duration);
    	},
    	stopDemo: function() {
		    clearInterval(this.timer);
		    // document.getElementById('message').innerHTML = this.defaultMessage;
    	}
    }
  
  }
</script>

<style scoped lang="scss">
   #message {
   	    text-align: center;
   }
</style>

