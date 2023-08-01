
import React, { useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import styled from 'styled-components';
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
  const [text, setText] = useState();
  const submite = () => {
    console.log(text,'text');
  }
  return (
    <PostEditorStyle>
      <div className='post_editor_head'>
        <Input placeholder="请输入标题..." />
        <div className='post_editor_right'>
          <Button type="primary" onClick={submite}>发布</Button>
          <Avatar size={32} icon="朝阳" />
        </div>
      </div>
      <MdEditor noPrettier modelValue={text} onChange={setText}/>
    </PostEditorStyle>
  );
};

export default PostEditor;
