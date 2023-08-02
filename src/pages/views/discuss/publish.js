// publish.js
import React, { useState } from 'react';
import styled from 'styled-components'
import ListItem from './list_item'

const PublishContent = styled.div`
  width:100%;
  min-height:calc(100vh - 96px );
  background: #ccc;
  overflow: hidden;
  .textareaInput {
    height:140px;
    padding:20px;
    margin:30px;
  }
  .SubmitButton {
    float:right;
    margin-right:30px;
  }
`;

const Publish =()=> {
  return(
    <PublishContent>
      <div>
        <textarea className="textareaInput" rows="4" cols="160" placeholder='请输入你要发表的内容......'></textarea>
      </div>
      <button className='SubmitButton'>发表</button>
      <ListItem></ListItem>
    </PublishContent>

  )
}
export default Publish;