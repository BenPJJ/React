import React, { useState } from 'react';
import { Row, Col, Input, Select, Button, DatePicker, Space } from 'antd';
import marked from 'marked';

const { Option } = Select;
const { TextArea } = Input;

const renderer = new marked.Renderer();
marked.setOptions({
  renderer: renderer,
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: false,
  smartLists: true,
  smartypants: false,
});

const AddArticle = () => {

  const [ article, setArticle ] = useState(null);
  const [ markdownContent, setMarkdownContent ] = useState('预览内容');
  const [ introducemd, setIntroducemd ] = useState();
  const [ introducehtml, setIntroducehtml ] = useState('');

  const changeContent = (e) => {
    setArticle(e.target.value);
    let html = marked(e.target.value);
    setMarkdownContent(html)
  }

  const changeIntroduce = (e) => {
    setIntroducemd(e.target.value);
    let html = marked(e.target.value);
    setIntroducehtml(html);
  }
  
  return (
    <div>
      <Row>
        <Col span={18}>
          <Row gutter={10} >
            <Col span={18}>
              <Input placeholder="博客标题" size="large" />
            </Col>
            <Col span={6}>
              <Select defaultValue="Sign Up" size="large">
                <Option value="Sign Up">视频教程</Option>
              </Select>
            </Col>
          </Row>
          <br />
          <Row gutter={10}>
            <Col span={12}>
              <TextArea
                value={article}
                className="markdown-content"
                rows={35}
                placeholder="文章内容"
                onChange={changeContent}
                onPressEnter={changeContent}
              />
            </Col>
            <Col span={12}>
              <div className="show-html" dangerouslySetInnerHTML={{__html:markdownContent}}></div>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row gutter={10}>
            <Space>
              <Button size="large">暂存文章</Button>
              <Button type="primary" size="large" onClick={() => {}}>发布文章</Button>
            </Space>
          </Row>
          <br/>
          <Row>
            <TextArea
              rows={4}
              value={introducemd}
              onChange={changeIntroduce}
              onPressEnter={changeIntroduce}
              placeholder="文章简介"
            />
            <br/><br/>
            <div className="introduce-html" dangerouslySetInnerHTML={{__html: '文章简介' + introducehtml}}></div>
          </Row>
          <Row>
            <div className="date-select">
              <DatePicker 
                placeholder="发布日期"
                size="large"
              />
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  )
};

export default AddArticle;
