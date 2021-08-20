/*
    能发送异步ajax请求的函数模块
    封装axios库
    函数返回值 promise对象
*/

import axios from  "axios";

export default function ajax(url,data={},type='GET') {
    if (type=='GET'){//发GET请求
        return axios.get(url,{//配置对象
          params: data//指定请求参数
        })
    }else {//发送POST请求
        return axios.post(url,data)
    }
}

//请求登入接口
//ajax('/login',{username: 'Tom',password: '123456'},'POST').then()
//添加用户
//ajax('/manage/user/add',{username: 'Tom',password: '123456',phone: '12482112321'},'POST').then()
