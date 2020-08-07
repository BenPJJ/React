import { Avatar, Divider, Row, Col, Tabs } from "antd"
import { UserOutlined } from '@ant-design/icons'
const { TabPane } = Tabs

const Author = () => {
  return (
    <div className="author--box comm-box">
      <div className="head">
        <Row type="flex" justify="">
          <Col xs={0} sm={0} md={7} lg={5} xl={4}>
            <Avatar size="large" icon={<UserOutlined/>}></Avatar>
            <Tabs defaultActiveKey="2">
              <TabPane
                tab={<span>
                  登录
                </span>}
              ></TabPane>
              <TabPane
                tab={<span>
                  注册
                </span>}
              ></TabPane>
            </Tabs>
          </Col>
        </Row>
        <Divider>登录方式</Divider>
      </div>
    </div>
  )
}

export default Author