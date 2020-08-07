import React, { useState } from 'react';
import Head from 'next/head';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import '../static/css/index.less';
import '../static/css/common.less';
import HeaderView from '../components/Header';
import ListView from './list';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Index = () => {
  const [collapsed, setCollapse] = useState(false);
  const onCollapse = () => setCollapse(!collapsed);

  return (
    <div>
      <Head>
        <title>BLOG</title>
      </Head>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <img src={'../static/img/logo192.png'} className="logo ant-layout-sider-children" alt="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Jack</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <HeaderView/>
          <Content>
            <Row className="comm-main" type="flex" justify="center">
              <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={18}>
                <ListView/>
              </Col>
              <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>456</Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default Index;