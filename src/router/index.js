/*
 * @Author: fanchen 2837903280@qq.com
 * @Date: 2023-06-27 19:37:41
 * @LastEditors: fanchen 2837903280@qq.com
 * @LastEditTime: 2023-06-28 15:15:28
 * @FilePath: \my-app\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Login from '../pages/login/index'
import Home from '../components/home'

export default [
    {
        path: '/',
        component: Home,
        // exact: true,
        // routes: [
        //   {
        //     path: '/Login',
        //     component: Login,
        //     routes: []
        //   }
        // ]
    },
    {
        path: '/login',
        component: Login,
    }
];


