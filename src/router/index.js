
import Login from '../pages/login/index'
import Home from '../pages/home/index'

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


