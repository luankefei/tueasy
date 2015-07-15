
'use strict'

/**
 * @name  detail-init.js
 * @description  detail页面的初始化模块
 * @author  sunken
 * @date 2015.7.14
 */
define(function(require, exports, module) {

    var control = require('./detail-control')

    var init = {}
    var LoadTimer = function() {

        this.count = 0
        this.now = 0
        this.callback = null

        this.step = function() {

            ++this.now

            if (this.now === this.count) {

                this.callback && this.callback()
            }
        }

        return this
    }

    init.loadChartLib = function() {

        // 加载highcharts
        seajs.use('/public/lib/adapters/standalone-framework.src.js', function() {
            seajs.use(['/public/lib/highcharts.src.js'])
        })
    }

    // 初始化页面各部分
    init.loadPage = function() {

        // 启动计数器，全部加载完成后，执行事件绑定
        var timer = new LoadTimer()

        timer.count = 4
        timer.callback = function() {

            init.bindToolEvent()
        }

        // 加载完成后，进行计数
        var loadCallback = function() {

            timer.step()
        }

        // 加载左侧添加工具条
        $('#add-bar').load('/view/detail-addbar.html', loadCallback)

        // 添加顶部公共工具条
        $('#start-bar').load('/view/detail-startbar.html', loadCallback)

        // 加载左侧数据工具条
        $('#left-bar').load('/view/detail-leftbar.html', loadCallback)

        // 加载右侧工具条
        $('#chart-bar').load('/view/detail-chartbar.html', loadCallback)
    }

    // 初始化页面基础事件
    // 数据工具条在点击数据按钮才激活
    // 顶部工具条，在创建控件后才激活
    // 右侧工具条，在选中控件后才激活
    init.bindToolEvent = function() {

        // 创建图表
        $('#add-chart').on('click', function() {

            var chart = control.create('chart')

            chart.init()
        })

        // 添加文本
        $('#add-text').on('click', function() {

            var text = control.create('text')

            text.init()
        })

        // 展开左侧数据工具条
        $('#add-data').on('click', function() {

            var data = require('./detail-data')
            
            $('#left-bar').show()
        })
    }

    module.exports = init
})

/**
 * 2015.7.14
 * 增加LoadTimer类，负责页面加载的流程控制
 * 2015.7.15
 * 重构了bindToolEvent，在add-data首次点击时，引入数据模块
 */