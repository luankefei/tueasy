
'use strict'

/**
 * @name  list.js
 * @description  列表页的入口js
 * @author  sunken
 * @date 2015.7.9
 */
define(function(require, exports) {

    var control = require('./detail-control')


    ! function() {

        // 加载highcharts
        seajs.use('/public/lib/adapters/standalone-framework.src.js', function() {
            seajs.use(['/public/lib/highcharts.src.js'])
        })

    } ()

    exports.init = function() {

        // 加载页面的各个部分
        $('#chart-bar').load('/view/detail-chartbar.html')

        // 创建图表
        $('#add-chart').on('click', function() {

            // var types = ['line', 'column', 'pie', 'bar', 'area', 'scatter', 'gauge', 'heatmap']
            var chart = control.create('chart')

            // chart.type = types[parseInt(Math.random() * 100 % 7)]
            chart.init()
        })

        // 控件的拖拽事件
        $('.control-selected').live('mousedown', function(e) {

            var target = $(this)
            var mouseStart = { x: e.pageX, y: e.pageY },
                controlStart = { 
                    x: target.position().left,
                    y: target.position().top
                }
            
            $(document).on('mousemove', function(e) {

                var x = e.pageX - mouseStart.x + controlStart.x + 'px',
                    y = e.pageY - mouseStart.y + controlStart.y + 'px'

                target.css('left', x)
                    .css('top', y)
            })

            $(document).on('mouseup', function() {

                // 回收拖拽事件
                $(document).off('mousemove')
                $(document).off('mouseup')
            })
        })
    }
})

/**
 * 2015.7.13
 * 增加控件的创建流程
 * 增加控件的拖拽事件
 * 增加对Highcharts的调用
 * 将控件部分代码移动到了detail-control文件中，通过require引入
 */