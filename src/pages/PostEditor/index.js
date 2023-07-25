
import React, { useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import styled from 'styled-components';

const PostEditorStyle = styled.div`
  .md-editor-dark {
    --md-bk-color: #333 !important;
  }
  div#md-editor-rt {
    height: 100vh;
  }
`

const PostEditor = () => {
  const [text, setText] = useState('# Hello Editor');

  return (
    <PostEditorStyle>
      <MdEditor modelValue={text} onChange={setText}/>
    </PostEditorStyle>
  );
};

export default PostEditor;
