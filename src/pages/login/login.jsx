import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Form, Input, Button, message} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
import logo from './images/logo.png'
import {reqLogin} from '../../api'
export default class Login extends Component {

    render () {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目: 后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登陆</h2>
                    {/*  表单函数组件*/}
                    <NormalLoginForm/>
                </section>
            </div>
        );
    };

};


const NormalLoginForm = () => {
    const onFinish = values => {//提交表单且数据验证成功后回调事件
        console.log('Received values of form: ', values);
        const {username,password} = values
        reqLogin(username,password).then(response => {
            console.log('成功了',response.data)
        }).catch(error => {
            console.log('失败了',error)

        })
    };

    return (

        <Form
            onFinish ={onFinish} className="login-form"
            initialValues={{
                username:'admin',//默认值
            }}
        >
            <Form.Item
                name="username"
                rules={[// 声明式验证: 直接使用别人定义好的验证规则进行验证
                    { required: true, whitespace: true, message: '用户名必须输入' },
                    { min: 4, message: '用户名至少4位' },
                    { max: 12, message: '用户名最多12位' },
                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                ]}
            >
                <Input
                    prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} className="site-form-item-icon" />}
                    placeholder="用户名"
                />
            </Form.Item>
            <Form.Item  name="password"
                rules={[
                    {
                        validator :(rule, value, callback) => {
                            console.log('validatePwd()',rule,value)
                            if (!value){
                                callback('密码必须输入')
                            }else if (value.length<4){
                                callback('密码长度不能小于4')
                            }else if (value.length>12){
                                callback('密码长度不能大于12')
                            }else if (!/^[a-zA-Z0-9_]+$/.test(value)){
                                callback('密码必须是英文、数字或下划线组成')
                            } else {
                                callback();//验证通过
                            }

                        }
                    }
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    style={{ color: 'rgba(0,0,0,.25)' }}
                    type="password"
                    placeholder="密码"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
}



