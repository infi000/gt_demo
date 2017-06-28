/*
 * @Author: 张驰阳
 * @Date:   2017-06-28 17:20:33
 * @Last Modified by:   张驰阳
 * @Last Modified time: 2017-06-28 17:24:21
 */

'use strict';
const path = require('path');
const webpack = require('webpack');
const PATHS = {
    'component': ['./js/router.js', './js/com/nb.js', './js/com/nl.js', './js/com/np.js', './js/index.js'],
    data: path.join(__dirname, 'static/data/news.js'),
    build: path.join(__dirname, 'build'),
};
module.exports = {
    entry: {
        component: PATHS.component,
        data: PATHS.data,
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
    },
}
