import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';

const Article = ({content}) => {
  const md = new MarkdownIt({ 
    html: true,
    linkify: true,
    typographer: true});
  const result = md.render(content);

  return (
    <div dangerouslySetInnerHTML={{ __html: result }}>
    </div>
  );
};

export default Article;
