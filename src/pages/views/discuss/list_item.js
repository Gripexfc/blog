import React, { useState } from 'react';
import { styled } from "styled-components"

const Item=styled.div`
  .listItem{
    background-color: #fff;
    margin: 30px;
    padding: 10px;
    color:#252933;
    font-size:14px;
    .content{
      display: flex;
      border-bottom: 1px solid #e2e6eb;
      padding-bottom: 20px;
      .headImg{
        width: 80px;
        height: 80px;
        margin-right: 15px;
        img{
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
      }
      .name{
        font-weight: 500;
        font-size: 18px;
      }
      .time{
        color:#8A919F
      }
    }
    .button_group{
      display: flex;
      justify-content: space-around;
      padding: 10px 0;
    }
    .discuss_headImg{
      margin-left: 70px;
      padding: 14px 0;
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: -16px;
      }
      input{
        width: 85%;
        height: 30px;
        padding: 0 10px;
        margin: 0 10px;
        border: 1px solid #ccd2da;
      }
    }
    .allComment{
      border-top: 1px solid #e2e6eb;
      .all_title{
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        margin: 20px;
        
      }
      .all_content{
        display: flex;
        margin: 0 40px;
        img{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 16px;
        }
        .all_chid_content{
          display: flex;
          .all_name{
            margin-right: 30px;
          }
        }
        .all_text{
          margin: 10px 0;
        }
      }
      
    }
  }
`;
const ListItem =()=>{
  const [isShow, setShow] = useState(false)

  const setIsShow=()=>{
    setShow((prevMessages)=>!prevMessages)
  }
  let list=[
    {
      url:'https://img0.baidu.com/it/u=2776253752,4284333942&fm=253&fmt=auto&app=138&f=JPEG?w=599&h=342',
      name:'陈小敏呐~',
      time:'2023:09:20~',
      text:'今天天气很好，才怪',
    },
    {
      url:'https://img0.baidu.com/it/u=2776253752,4284333942&fm=253&fmt=auto&app=138&f=JPEG?w=599&h=342',
      name:'陈小敏呐~',
      time:'2023:09:20~',
      text:'今天天气很好，才怪',
    },
    {
      url:'https://img0.baidu.com/it/u=2776253752,4284333942&fm=253&fmt=auto&app=138&f=JPEG?w=599&h=342',
      name:'陈小敏呐~',
      time:'2023:09:20~',
      text:'今天天气很好，才怪',
    },
    {
      url:'https://img0.baidu.com/it/u=2776253752,4284333942&fm=253&fmt=auto&app=138&f=JPEG?w=599&h=342',
      name:'陈小敏呐~',
      time:'2023:09:20~',
      text:'今天天气很好，才怪',
    }
  ]
  return(
    <Item>
      {list.map((el,index)=>(
        <div className='listItem' key={index}>
          <div className="content">
            <div className="headImg">
              <img src={el.url}></img>
            </div>
            <div className="publishContent">
              <div className="name">{el.name}</div>
              <p className="time">{el.time}</p>
              <div className="text">{el.text}</div>
            </div>
          </div>
          <div className="button_group">
            <div>分享</div>
            <div onClick={setIsShow}>评论</div>
            <div>点赞呀</div>
          </div>
          {isShow &&(
            <div className="discuss_headImg">
              <img src={el.url}></img>
              <input></input>
            </div>
          )}


          <div className='allComment'>
            <div className='all_title'>
              <div>全部评论</div>
              <div>最新</div>
            </div>
            <div className='all_content'>
              <div>
                <img src={el.url}></img>
              </div>
              <div>
                <div className='all_chid_content'>
                  <div className="all_name">{el.name}</div>
                  <div className="all_time">{el.time}</div>
                </div>
                <div className="all_text">{el.text}</div>
              </div>
            </div>
            
          </div>




        </div>
      ))}
      

      
    </Item>
    
  )
}
export default ListItem