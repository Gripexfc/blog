
import React, { useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import styled from 'styled-components';
import http from '../../api/axios'
import { Input, Button, Avatar } from 'antd';

const PostEditorStyle = styled.div`
  div#md-editor-rt {
    height: 100vh;
  }
  .post_editor_head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 27px;
    height: 60px;
    input {
      width: 600px;
      margin: 0;
      padding: 0;
      font-size: 24px;
      font-weight: 500;
      color: #1d2129;
      border: 0;
      border-style:none; 
      outline: none;
      box-shadow: none;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
    }
    .post_editor_right {
      button {
        margin: 0 8px;
      }
    }
  }
`

const PostEditor = () => {
  const [content, setContent] = useState();
  const [title, setTitle] = useState();
  const submite = () => {
    http.post('/post/addPost', {title, content}).then(res => {
      console.log(res,'res')
    })
    console.log(title,'text');
  }
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };
  return (  
    <PostEditorStyle>
      <div className='post_editor_head'>
        <Input value={title} onChange={handleInputChange} placeholder="请输入标题..." />
        <div className='post_editor_right'>
          <Button type="primary" onClick={submite}>发布</Button>
          <Avatar size={32} icon="朝阳" />
        </div>
      </div>
      <MdEditor noPrettier modelValue={content} onChange={setContent}/>
    </PostEditorStyle>
  );
};

export default PostEditor;
