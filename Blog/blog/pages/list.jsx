import React, { useState } from 'react'
import Header from '../components/Header'
import { Row, Col, List } from 'antd';

const ListView = () => {

  const [ mylist, setMylist ] = useState([
    {title: 'react全家桶，在学习前需要有一定的react基础，掌握前端基本知识html、css、js。', context: '这是一个全能高手告诉你的之臣函数的加法罕见的好伐家时间划分届时将发挥时代峻峰和接口回调'},
    {title: 'react全家桶，在学习前需要有一定的react基础，掌握前端基本知识html、css、js。'},
    {title: 'react全家桶，在学习前需要有一定的react基础，掌握前端基本知识html、css、js。'},
    {title: 'react全家桶，在学习前需要有一定的react基础，掌握前端基本知识html、css、js。'}
  ]);

  return (
    <div>
      <List
        header={<div>最新日志</div>}
        itemLayout="vertical"
        dataSource={mylist}
        renderItem={item => (
          <List.Item>
            <div className="list--title">{item.title}</div>
            <div className="list--context">{item.context}</div>
          </List.Item>
        )}
      >
      </List>
    </div>
  )
}

export default ListView;