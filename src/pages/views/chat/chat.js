import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from 'antd'

const ChatStyle = styled.div`
    ::-webkit-scrollbar {
        display: none;
    }
    border: 2px solid #e7e7e7;
    padding: 0 30px;
    /* .inner-container */
    min-height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
    .showChat {
        /* flex: 1; */
        height: 600px;
        overflow: hidden;
        overflow-y: scroll;
        .chat-content {
            height: 1000px;
            .userChatInfo {
                height: 64px;
                width: 60%;
                display: flex;
                align-items: center;

                img {
                    width: 32px;
                    height: 32px;
                    border-radius: 16px;
                }
                .userChatInfo-content {
                    border-radius: 6px;
                    display: flex;
                    flex-direction: column;
                    margin-left: 12px;
                    p {
                        font-weight: 600;
                        font-size: 16px;
                        color: #252933;
                    }
                    span {
                        font-size: 13px;
                        color: #8a919f;
                    }
                }
            }
        }
        .userChatInfo-right {
            float: right;
            justify-content: flex-end !important;
            .userChatInfo-content {
                margin-right: 12px;
                background: #95ec69;
                padding: 8px;
            }
        }
        .userChatInfo-left {
            float: left;
            .userChatInfo-content {
                background: #fff;
                padding: 8px;
            }
        }
    }
    .chat {
        height: 160px;
        flex-direction: column;
        display: flex;
        border-top: 2px solid #e7e7e7;
        .input-content {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            flex: 1;
        }
        .chatTool {
            /* border-bottom: 2px solid #e7e7e7; */
            height: 42px;
            display: flex;
            align-items: center;
            padding: 12px auto;
            svg {
                margin-left: 12px;
            }
        }
    }
`

function ChatApp() {
    const { TextArea } = Input;
    return (
        <ChatStyle>
            <div className='showChat'>
                <div className='chat-content'>
                   <div className='userChatInfo userChatInfo-left'>
                        <img src='https://img0.baidu.com/it/u=2776253752,4284333942&fm=253&fmt=auto&app=138&f=JPEG?w=599&h=342'></img>
                        <div className='userChatInfo-content'>
                            <span>未知用户</span>
                            <p>谁tm六点半下班啊 </p>
                        </div>
                   </div>
                   <div className='userChatInfo userChatInfo-right'>
                        <div className='userChatInfo-content'>
                            {/* <span>朝阳</span> */}
                            <p>谁tm六点半下班啊 </p>
                        </div>
                        <img src='https://img0.baidu.com/it/u=2776253752,4284333942&fm=253&fmt=auto&app=138&f=JPEG?w=599&h=342'></img>
                   </div>
                </div>
            </div>
            <div className='chat'>
                <div className='chatTool'>
                    {/* <svg t="1690609418822" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29968" width="200" height="200"><path d="M513.520099 512m-508.819875 0a508.819876 508.819876 0 1 0 1017.639751 0 508.819876 508.819876 0 1 0-1017.639751 0Z" fill="#DF71F5" p-id="29969"></path><path d="M513.520099 512m-355.442484 0a355.442484 355.442484 0 1 0 710.884969 0 355.442484 355.442484 0 1 0-710.884969 0Z" fill="#51E4C2" p-id="29970"></path><path d="M859.046957 815.167602l-730.792547-71.69908a12.720497 12.720497 0 0 1-11.410286-13.903503l49.966112-509.315976a12.720497 12.720497 0 0 1 13.903503-11.416645l730.792547 71.69908a12.720497 12.720497 0 0 1 11.416646 13.903503l-49.972472 509.315976a12.720497 12.720497 0 0 1-13.903503 11.416645z" fill="#E4EFEC" p-id="29971"></path><path d="M880.671801 780.599652H146.374758a12.720497 12.720497 0 0 1-12.720497-12.720497V256.120845a12.720497 12.720497 0 0 1 12.720497-12.720497h734.290683a12.720497 12.720497 0 0 1 12.720497 12.720497v511.75831a12.720497 12.720497 0 0 1-12.720497 12.720497z" fill="#FFFFFF" p-id="29972"></path><path d="M513.52646 575.602484l121.906882-121.906882 226.04959 226.049591v69.053217H513.52646z" fill="#3ECCA6" p-id="29973"></path><path d="M741.407801 544.678957m-90.983354 0a90.983354 90.983354 0 1 0 181.966708 0 90.983354 90.983354 0 1 0-181.966708 0Z" fill="#F8E71C" p-id="29974"></path><path d="M741.407801 544.678957m-57.070509 0a57.070509 57.070509 0 1 0 114.141019 0 57.070509 57.070509 0 1 0-114.141019 0Z" fill="#F8E71C" p-id="29975"></path><path d="M165.455503 607.778981c18.228472-14.520447 227.245317-227.251677 227.245317-227.251677l369.186981 369.193342H165.455503V607.778981z" fill="#51E4C2" p-id="29976"></path><path d="M247.133814 570.832298a41.157168 24.289789 0 1 0 82.314335 0 41.157168 24.289789 0 1 0-82.314335 0Z" fill="#1F211E" p-id="29977"></path><path d="M283.749764 510.193689h9.076075v60.638609h-9.076075z" fill="#534741" p-id="29978"></path><path d="M288.290981 486.317317m-41.157167 0a41.157168 41.157168 0 1 0 82.314335 0 41.157168 41.157168 0 1 0-82.314335 0Z" fill="#3ECCA6" p-id="29979"></path></svg> */}
                    <svg t="1690609418822" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29968" width="26" height="26"><path d="M513.520099 512m-508.819875 0a508.819876 508.819876 0 1 0 1017.639751 0 508.819876 508.819876 0 1 0-1017.639751 0Z" fill="#DF71F5" p-id="29969"></path><path d="M513.520099 512m-355.442484 0a355.442484 355.442484 0 1 0 710.884969 0 355.442484 355.442484 0 1 0-710.884969 0Z" fill="#51E4C2" p-id="29970"></path><path d="M859.046957 815.167602l-730.792547-71.69908a12.720497 12.720497 0 0 1-11.410286-13.903503l49.966112-509.315976a12.720497 12.720497 0 0 1 13.903503-11.416645l730.792547 71.69908a12.720497 12.720497 0 0 1 11.416646 13.903503l-49.972472 509.315976a12.720497 12.720497 0 0 1-13.903503 11.416645z" fill="#E4EFEC" p-id="29971"></path><path d="M880.671801 780.599652H146.374758a12.720497 12.720497 0 0 1-12.720497-12.720497V256.120845a12.720497 12.720497 0 0 1 12.720497-12.720497h734.290683a12.720497 12.720497 0 0 1 12.720497 12.720497v511.75831a12.720497 12.720497 0 0 1-12.720497 12.720497z" fill="#FFFFFF" p-id="29972"></path><path d="M513.52646 575.602484l121.906882-121.906882 226.04959 226.049591v69.053217H513.52646z" fill="#3ECCA6" p-id="29973"></path><path d="M741.407801 544.678957m-90.983354 0a90.983354 90.983354 0 1 0 181.966708 0 90.983354 90.983354 0 1 0-181.966708 0Z" fill="#F8E71C" p-id="29974"></path><path d="M741.407801 544.678957m-57.070509 0a57.070509 57.070509 0 1 0 114.141019 0 57.070509 57.070509 0 1 0-114.141019 0Z" fill="#F8E71C" p-id="29975"></path><path d="M165.455503 607.778981c18.228472-14.520447 227.245317-227.251677 227.245317-227.251677l369.186981 369.193342H165.455503V607.778981z" fill="#51E4C2" p-id="29976"></path><path d="M247.133814 570.832298a41.157168 24.289789 0 1 0 82.314335 0 41.157168 24.289789 0 1 0-82.314335 0Z" fill="#1F211E" p-id="29977"></path><path d="M283.749764 510.193689h9.076075v60.638609h-9.076075z" fill="#534741" p-id="29978"></path><path d="M288.290981 486.317317m-41.157167 0a41.157168 41.157168 0 1 0 82.314335 0 41.157168 41.157168 0 1 0-82.314335 0Z" fill="#3ECCA6" p-id="29979"></path></svg>
                    <svg t="1690608122076" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19766" width="26" height="26"><path d="M256 750.933333a458.752 458.752 0 0 0 30.037333 162.474667 460.117333 460.117333 0 0 0 656.725334-563.882667A460.458667 460.458667 0 0 0 256 750.933333z" fill="#3FE699" p-id="19767"></path><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-921.6a409.6 409.6 0 1 0 409.6 409.6A409.6 409.6 0 0 0 512 102.4z" fill="#2D515E" p-id="19768"></path><path d="M307.2 341.333333m51.2 0l0 0q51.2 0 51.2 51.2l0 102.4q0 51.2-51.2 51.2l0 0q-51.2 0-51.2-51.2l0-102.4q0-51.2 51.2-51.2Z" fill="#2D515E" p-id="19769"></path><path d="M614.4 341.333333m51.2 0l0 0q51.2 0 51.2 51.2l0 102.4q0 51.2-51.2 51.2l0 0q-51.2 0-51.2-51.2l0-102.4q0-51.2 51.2-51.2Z" fill="#2D515E" p-id="19770"></path></svg>
                </div>
                <div className='input-content'>
                    <TextArea rows={3} maxLength={90} placeholder="输入聊天内容..."/>
                    <Button type="primary">发送</Button>
                </div>
            </div>
        </ChatStyle>
    )
}

export default ChatApp;
