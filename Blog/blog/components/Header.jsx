import React from 'react'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, SoundOutlined, SolutionOutlined } from '@ant-design/icons'

import '../static/css/header.less'

const Header = () => {
  return (
    <div className="header">
      <Row type="flex" justify="space-between" align="middle">
        <Col xs={24} sm={24} md={10} lg={14} xl={12}>
          <span className="header--logo">blog</span>
          <span className="header--txt">一套完成的前中后项目搭建项目</span>
        </Col>

        <Col xs={0} sm={0} md={10} lg={10} xl={12}>
          <Menu mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined/>}>
              首页
            </Menu.Item>
            <Menu.Item key="boiling" icon={<SoundOutlined/>}>
              吐槽
            </Menu.Item>
            <Menu.Item key="drary" icon={<SolutionOutlined/>}>
              日记
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header;