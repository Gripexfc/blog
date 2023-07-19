// ChatApp.js
import React, { useState } from 'react';
import { css } from '@emotion/react';

const chatContainerStyles = css`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const bubbleStyles = css`
  display: inline-block;
  max-width: 70%;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  word-wrap: break-word;
  font-size: 16px;
`;

const senderStyles = css`
  color: #654;
  background-color: #654;
  align-self: flex-end;
`;

const receiverStyles = css`
  color: #000;
  background-color: #f3f3f3;
  align-self: flex-start;
`;

const inputContainerStyles = css`
  display: flex;
  align-items: center;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const inputStyles = css`
  flex-grow: 1;
  padding: 10px;
  border: none;
  color: red;
  outline: none;
`;

const buttonStyles = css`
  padding: 10px 20px;
  background-color: #654;
  color: #654;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { sender: 'John', text: 'Hello!', isReceiver: false },
    { sender: 'Alice', text: 'Hi there!', isReceiver: true },
    // Add more initial messages as needed
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return; // 防止发送空消息

    const newMessageObj = {
      sender: 'You', // 假设所有新消息都由用户发送
      text: newMessage,
      isReceiver: false,
    };

    setMessages((prevMessages) => [...prevMessages, newMessageObj]);
    setNewMessage('');
  };

  return (
    <div css={chatContainerStyles}>
      {messages.map((message, index) => (
        <div
          key={index}
          css={[bubbleStyles, message.isReceiver ? receiverStyles : senderStyles]}
        >
          {message.sender && <span>{message.sender}</span>}
          <p>{message.text}</p>
        </div>
      ))}
      <div css={inputContainerStyles}>
        <input
          css={inputStyles}
          type="text"
          placeholder="输入消息..."
          value={newMessage}
          style={{
            // color: 'red',
          }}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button css={buttonStyles} onClick={handleSendMessage}>
          发送
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
