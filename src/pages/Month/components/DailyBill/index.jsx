import classNames from 'classnames'
import { useMemo, useState } from 'react'
import { billTypeToName } from '@/contants'
import './index.scss'

const DailyBill = ({ dayBillList, date }) => {
  // 是否展开
  const [dateVisable, setDateVisable] = useState(false);
  // 展示的数据 
  const showResult = useMemo(() => {
    const pay = dayBillList.filter(item => item.type === 'pay').reduce((pre, cur) => pre + cur.money, 0)
    const income = dayBillList.filter(item => item.type === 'income').reduce((pre, cur) => pre + cur.money, 0)
    return { pay: pay * -1, income, total: pay + income }
  }, [dayBillList])
  return (
    <div className={classNames('dailyBill')}>
      <div className="header">
        <div className="dateIcon">
          <span className="date">{date}</span>
          <span className={classNames('arrow', dateVisable && 'expand')} onClick={() => setDateVisable(!dateVisable)}></span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{showResult.pay.toFixed(2)}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{showResult.income.toFixed(2)}</span>
          </div>
          <div className="balance">
            <span className="money">{showResult.total.toFixed(2)}</span>
            <span className="type">结余</span>
          </div>
        </div>
      </div>
      {/* 单日列表 */}
      {dateVisable &&
        <div className="billList">
          {dayBillList.map(item => {
            return (
              <div className="bill" key={item.id}>
                <img
                  src={`https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/ka/${item.useFor}.svg`}
                  alt="icon"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
                <div className="detail">
                  <div className="billType">{billTypeToName[item.useFor]}</div>
                </div>
                <div className={classNames('money', item.type)}>
                  {item.money.toFixed(2)}
                </div>
              </div>
            )
          })}
        </div>}

    </div>
  )
}
export default DailyBill