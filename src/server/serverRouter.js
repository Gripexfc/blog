/*
 * @Author: fanchen 2837903280@qq.com
 * @Date: 2023-06-18 17:11:22
 * @LastEditors: fanchen 2837903280@qq.com
 * @LastEditTime: 2023-06-26 17:40:25
 * @FilePath: \my-app\src\serverRouter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import util from './util';
const express = require('express')
const router = express.Router();


router.get("*", function (req, res, next) {
    res.status(200).send(util(req));
});
module.exports=router