import { Button, DatePicker, Input, NavBar } from 'antd-mobile'
import './index.scss'
import classNames from 'classnames'
import { billListData } from '@/contants'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'

import {addBillList} from '@/store/modules/billStore'

const New = () => {
  // 路由跳转
  const navigate = useNavigate()
  // 获取Redux中的方法
  const dispatch = useDispatch()

  // 当前模式（收入/支出）
  const [billType, setBillType] = useState('pay')
  // 输入字段
  const [inputText, setInputText] = useState('')
  const inputChange = (value) => {
    setInputText(value)
  }

  // 日期选择
  const [datePickerVisible, setDatePickerVisible] = useState(false)
  const [date, setDate] = useState(new Date())
  // 收入/支出项选择
  const [useFor, setUseFor] = useState('')
  
  const saveBill =()=>{
    const data ={
      type:billType,
      money:billType === 'pay'? -inputText:+inputText,
      date:dayjs(date).format('YYYY-MM-DD HH:mm:ss'),
      useFor:useFor,
    }
    console.log(data);
    dispatch(addBillList(data))
  }
  
  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            className={classNames(billType === 'pay' ? 'selected':'')}
            onClick={()=>setBillType('pay')}
          >
            支出
          </Button>
          <Button
            className={classNames(billType === 'income' ? 'selected':'')}
            shape="rounded"
            onClick={()=>setBillType('income')}
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <img
              className="icon"
                src={`https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/ka/calendar.svg`}
                alt="icon"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <span className="text" onClick={()=>setDatePickerVisible(true)}>{dayjs(date).format('YYYY-MM-DD')}</span>
              <DatePicker
                className="kaDate"
                title="记账日期"
                max={new Date()}
                visible={datePickerVisible}
                onConfirm={(value)=>setDate(value)}
                onClose={() => setDatePickerVisible(false)}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value={inputText}
                onChange={inputChange}
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {billListData[billType].map(item => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map(item => {
                  return (
                    <div
                      className={classNames(
                        'item',
                        useFor === item.type?'selected':''
                      )}
                      key={item.type}
                      onClick={() => setUseFor(item.type)}
                    >
                      <div className="icon">
                        <img
                          src={`https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/ka/${item.type}.svg`}
                          alt="icon"
                          style={{
                            width: 20,
                            height: 20,
                          }}
                        />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="btns">
        <Button className="btn save" onClick={saveBill}>
          保 存
        </Button>
      </div>
    </div>
  )
}

export default New