import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import styled from 'styled-components';
import { useParams  } from 'react-router-dom';
import http from "../../../api/axios";

const md = new MarkdownIt({ 
  html: true,
  linkify: true,
  typographer: true
});

function renderHtml(markdown) {
  return md.render(markdown);
}

const RenderArticle = () => {
    const { id } = useParams();
    const [contentHtml, setContentHtml] = useState(''); // 新增状态
    useEffect(() => {
        const fetchArticle = async () => {
            try {
              const res = await http.get(`/post/findPost?id=${id}`);
              const result = renderHtml(res.data.post.content);
              setContentHtml(result);
              console.log(result, 'res[0]');
            } catch (error) {
              console.error('Error fetching article:', error);
            }
          };
          
          fetchArticle();

      }, []);

  return (
    <ArticleStyle className="markdown-body" dangerouslySetInnerHTML={{  __html: contentHtml || '' }}>
    </ArticleStyle>
  );
};

const ArticleStyle = styled.div`
  word-break: break-word;
  line-height: 1.75;
  font-weight: 400;
  font-size: 15px;
  overflow-x: hidden;
  color: #333;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.5;
    margin-top: 35px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    &:first-child {
      margin-top: -1.5rem;
      margin-bottom: 1rem;
    }
    &::before {
      content: "#";
      display: inline-block;
      color: $color-theme;
      padding-right: 0.23em;
    }
  }
  h1 {
    position: relative;
    font-size: 2.5rem;
    margin-bottom: 5px;
    &::before {
      font-size: 2.5rem;
    }
  }
  h2 {
    padding-bottom: 0.5rem;
    font-size: 2.2rem;
    border-bottom: 1px solid #ececec;
  }
  h3 {
    font-size: 1.5rem;
    padding-bottom: 0;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    margin-top: 5px;
  }

  p {
    line-height: inherit;
    margin-top: 22px;
    margin-bottom: 22px;
  }

  strong {
    color: #3eaf7c;
  }

  img {
    max-width: 100%;
    border-radius: 2px;
    display: block;
    margin: auto;
    border: 3px solid rgba(62, 175, 124, 0.2);
  }

  hr {
    border-top: 1px solid #3eaf7c;
    border-bottom: none;
    border-left: none;
    border-right: none;
    margin-top: 32px;
    margin-bottom: 32px;
  }

  code {
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;;
    word-break: break-word;
    overflow-x: auto;

    padding: 0.2rem 0.5rem;
    margin: 0;

    color: #3eaf7c;
    font-weight: 700;

    font-size: 0.85em;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
  }

  pre {
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;;
    overflow: auto;
    position: relative;
    line-height: 1.75;
    border-radius: 6px;
    border: 2px solid #3eaf7c;
    > code {
      font-size: 12px;
      padding: 15px 12px;
      margin: 0;
      word-break: normal;
      display: block;
      overflow-x: auto;
      color: #333;
      background: #f8f8f8;
    }
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: #3eaf7c;
    &:hover,
    &:active {
      // text-decoration: underline;
      border-bottom: 1.5px solid #3eaf7c;
    }
    &:before {
      content: "⇲";
    }
  }

  table {
    display: inline-block !important;
    font-size: 12px;
    width: auto;
    max-width: 100%;
    overflow: auto;
    border: solid 1px #3eaf7c;
  }
  thead {
    background: #3eaf7c;
    color: #fff;
    text-align: left;
  }
  tr:nth-child(2n) {
    background-color: rgba(62, 175, 124, 0.2);
  }
  th,
  td {
    padding: 12px 7px;
    line-height: 24px;
  }
  td {
    min-width: 120px;
  }

  blockquote {
    color: #666;
    padding: 1px 23px;
    margin: 22px 0;
    border-left: 0.5rem solid rgba(62, 175, 124, 0.6);
    border-color: #42b983;
    background-color: #f8f8f8;
    &::after {
      display: block;
      content: "";
    }
    & > p {
      margin: 10px 0;
    }
  }

  details {
    border: none;
    outline: none;
    border-left: 4px solid #3eaf7c;
    padding-left: 10px;
    margin-left: 4px;
    summary {
      cursor: pointer;
      border: none;
      outline: none;
      background: white;
      margin: 0px -17px;
      &::-webkit-details-marker {
        color: #3eaf7c;
      }
    }
  }

  ol,
  ul {
    padding-left: 28px;
    li {
      margin-bottom: 0;
      list-style: inherit;

      & .task-list-item {
        list-style: none;
        ul,
        ol {
          margin-top: 0;
        }
      }
    }

    ul,
    ol {
      margin-top: 3px;
    }
  }

  ol li {
    padding-left: 6px;
    &::marker {
      color: #3eaf7c;
    }
  }

  ul li {
    list-style: none;
    &:before {
      content: "•";
      margin-right: 4px;
      color: #3eaf7c;
    }
  }

  @media (max-width: 720px) {
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 18px;
    }
  }
`

export default RenderArticle;
