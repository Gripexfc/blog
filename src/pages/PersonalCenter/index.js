import React, { useEffect } from 'react';
import styled from 'styled-components'
import { Menu } from 'antd'
import github from '../../assets/personalCenterImg/github_.png'
import global from '../../assets/personalCenterImg/global_.png'
import weibo from '../../assets/personalCenterImg/weibo_.png'

const menuList = [
    {
      label: '动态',
      key: 'Trends',
    //   icon: <MailOutlined />,
    },
    {
      label: '文章',
      key: 'Article',
    //   icon: <AppstoreOutlined />,
    },
    {
        label: '收藏集',
        key: 'Collection',
      //   icon: <MailOutlined />,
    },
    {
      label: '关注',
      key: 'Follows',
        //   icon: <MailOutlined />,
    } ,
    {
        label: '赞',
        key: 'Likes',
        //   icon: <MailOutlined />,
    }
  ];



function PersonalCenter() {
    useEffect(()=> {
        // props.toggleTap('Home')
    }, [])
    const toggleTap = ({key}) => {
        // props.toggleTap(key)
        console.log(key);
    }
    return (
        <PersonalCenterContent>
            <LeftPanel>
                <Avatar>
                    <div className='avatar-img'>
                        <IMG src='https://img0.baidu.com/it/u=2776253752,4284333942&fm=253&fmt=auto&app=138&f=JPEG?w=599&h=342'></IMG>
                    </div>
                    <div className='avatar-info'>
                        <div>
                            <h1>姓甚名谁</h1>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <h1>职业</h1>
                                </div>
                                <div>
                                    <h1>座右铭</h1>
                                </div>
                            </div>
                            <div>
                                <h1>设置按钮</h1>
                            </div>
                        </div>
                    </div>
                </Avatar>
                <div className='follows'>
                    <div>
                        <div>关注了</div>
                        <div>18</div>
                    </div>
                    <div>
                        <div>关注者</div>
                        <div>0</div>
                    </div>
                </div>
                <div className='collection-list'>
                    <div>
                        收藏集
                        <span>13</span>
                    </div>
                    <div>
                        关注标签
                        <span>3</span>
                    </div>
                    <div>
                        加入于
                        <span>2021-12-16</span>
                    </div>
                </div>
                <div className='bottom-link'>
                    <div>
                        <IMG src={weibo}></IMG>
                        <IMG src={github}></IMG>
                        <IMG src={global}></IMG>
                    </div>
                </div>
            </LeftPanel>
            <div className='space-div'></div>
            <RightPanel>
                <Menu defaultSelectedKeys={['Home']} onClick={toggleTap} items={menuList} mode="horizontal"></Menu>
            </RightPanel>
        </PersonalCenterContent>
    )
}

const PersonalCenterContent = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    padding: 15px 30px;
    .space-div {
        flex: 0.05;
    }
`

const LeftPanel = styled.div`
    flex: 1;
    background-color: #fff;
    position: relative;
    .follows {
        height: 50px;
        display: flex;
        text-align: center;
        div {
            flex: 1;
        }
    }
    .collection-list {
        margin: 30px;
        div {
            line-height: 50px;
            border-top: 1px solid rgba(230,230,231,.5);
            cursor: pointer;
        }
        span {
            float: right;
        }
    }
    .collection-list:last-child {
        border-bottom: 1px solid rgba(230,230,231,.5);
    }
    .bottom-link {
        width: 100%;
        height: 50px;
        position: absolute;
        bottom: 0px;
        div {
            width: 50%;
            height: 100%;
            display: flex;
            margin: auto;
        }
        IMG {
            width: 16px;
            height: 16px;
            margin: auto;
        }
    }
`

const RightPanel = styled.div`
    flex: 3;
    background-color: #fff;
`

const Avatar = styled.div`
    margin-top: 15px;
    height: 130px;
    margin: 45px 30px 30px 30px;
    // background-color: pink;
    display: flex;
    border-bottom: 1px solid #dfd9d9;
    .avatar-img {
        flex: 1;
        height: 85px;
        margin-right: 30px;
    }
    .avatar-info {
        flex: 2;
    }
`

const IMG = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
`

export default PersonalCenter;