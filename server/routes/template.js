
'use strict'

/**
 * @name  template.js
 * @author sunken
 * @description template模块的入口
 * @date 2015.7.9
 */
var Template = require('../models/template.js')

exports.getTemplate = function(req, res) {

    // var fakeTemplates = [{

    //     id: 4,
    //     order: 0,
    //     name: '测试模板',
    //     documentId: 1,
    //     thumbnail: '/public/image/test_template1.jpg',
    //     author: 'dagou',

    //     // 不太重要的字段
    //     // themeId: 1,
    //     // composingId: 1,
    // }]

    // 从数据库中获取模板
    Template.getTemplate(function(err, templates) {

        res.send({

            code: 0,
            message: '执行成功',
            data: templates
        })
    })
    
    


    

    // Template.getContent(start, end, function(err, contents) {

    //     if (contents.length === 0) {

    //         res.send({ 
    //             code: -1, 
    //             message: '没有结果' 
    //         })
    //     }

    //     res.send({
    //         code: 0,
    //         message: '执行成功',
    //         result: contents
    //     })
    // })
}

/*
var fakeTemplates = [{
        id: 1,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template.png',
        author: 'dagou'
    },
    {
        id: 2,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template1.jpg',
        author: 'dagou'
    },
    {
        id: 3,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template.png',
        author: 'dagou'
    },
    {
        id: 4,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template1.jpg',
        author: 'dagou'
    },
    {
        id: 3,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template.png',
        author: 'dagou'
    },
    {
        id: 4,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template1.jpg',
        author: 'dagou'
    },
    {
        id: 3,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template.png',
        author: 'dagou'
    },
    {
        id: 4,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template1.jpg',
        author: 'dagou'
    },
    {
        id: 3,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template.png',
        author: 'dagou'
    },
    {
        id: 4,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template1.jpg',
        author: 'dagou'
    },
    {
        id: 3,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template.png',
        author: 'dagou'
    },
    {
        id: 4,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template1.jpg',
        author: 'dagou'
    },
    {
        id: 3,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template.png',
        author: 'dagou'
    },
    {
        id: 4,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template1.jpg',
        author: 'dagou'
    },
    {
        id: 3,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template.png',
        author: 'dagou'
    },
    {
        id: 4,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template1.jpg',
        author: 'dagou'
    },
    {
        id: 3,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template.png',
        author: 'dagou'
    },
    {
        id: 4,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template1.jpg',
        author: 'dagou'
    },
    {
        id: 3,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template.png',
        author: 'dagou'
    },
    {
        id: 4,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template1.jpg',
        author: 'dagou'
    },
    {
        id: 3,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template.png',
        author: 'dagou'
    },
    {
        id: 4,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template1.jpg',
        author: 'dagou'
    },
    {
        id: 3,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template.png',
        author: 'dagou'
    },
    {
        id: 4,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template1.jpg',
        author: 'dagou'
    },
    {
        id: 3,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template.png',
        author: 'dagou'
    },
    {
        id: 4,
        order: 0,
        name: '测试模板',
        documentId: 1,
        thumbnail: '/public/image/test_template1.jpg',
        author: 'dagou'
    }]
  
*/
