import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Spin, Card, Input, Icon, Button, message } from 'antd';
import { api } from './config/apiUrl';
import 'antd/dist/antd.less';
import './css/login.less';

const Login = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ password, setPassword ] = useState('');
  const [ userName, setUserName ] = useState('');

  let history = useHistory();

  const checkLogin = () => {

    if (!userName) {
      message.error('用户名不能为空');
      return false;
    } else if (!password) {
      message.error('密码不能为空');
      return false;
    }

    setIsLoading(true);
    let dataProps = { 'userName': userName, 'password': password };

    axios({
      method: 'post',
      url: api.checkLogin,
      data: dataProps,
      withCredentials: true
    }).then(
      res => {
        if (res.data.error_code === 0) {
          localStorage.setItem('openId', res.data.data.openId)
          history.push({ pathname: '/index' });
        } else {
          message.error('用户名密码错误');
        }
      }
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="login">
      <div className="login__container">
        <Spin className="box" tip="Loading..." spinning={isLoading}>
          <Card title="Blog System" bordered={true} style={{width: 400}}>
            <Input
              id="userName"
              size="large"
              placeholder="Enter your userName"
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
              onChange={(e) => {setUserName(e.target.value)}}
            />
            <br/><br/>
            <Input.Password
              id="password"
              size="large"
              placeholder="Enter your password"
              prefix={<Icon type="key" style={{color: 'rgba(0,0,0,.25)'}} />}
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <br/><br/>
            <Button type="primary" size="large" block onClick={checkLogin}>Login in</Button>
          </Card>
        </Spin>
      </div>
    </div>
  )
}

export default Login;