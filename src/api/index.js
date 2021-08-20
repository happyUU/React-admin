/*
    包含应用中所有接口的请求函数的模块
    每个函数的返回值都是promise
*/

import ajax from "./ajax";

//登陆
/*export function reqLogin(username,password){
    return ajax('/login',{username,password},'POST')
}*/

//登陆
/*export function reqLogin (username,password){
    return ajax('/login',{username,password},'POST')
}*/

//const BASE = 'http://localhost:5000'
const BASE = ''

export const reqLogin = (username,password) => ajax(BASE+'/login',{username,password},'POST')

//添加用户
export const  reqAdd = (user)=>ajax(BASE+'manage/user/add',user,'POST')




