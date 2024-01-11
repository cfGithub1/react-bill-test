import { useMemo, useState,useEffect } from 'react'
import dayjs from 'dayjs';

import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import classNames from 'classnames';
import { useSelector } from 'react-redux';

const Month = () => {
    // 弹窗是否开启
    const [dateVisable, setDateVisable] = useState(false);
    // 时间显示
    const [date, setDate] = useState(() => new Date());

    // 获取数据
    const billList = useSelector(state => state.bill.billList);
    // 按年-月分组
    const monthBillList = useMemo(() => {
        const result = {};
        billList.forEach(item => {
            const date = new Date(item.date);
            const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
            if (!result[key]) result[key] = [];
            result[key].push(item);
        });
        return result;
    }, [billList])
    
    //展示的数据 
    const [showData,setShowData] = useState([])
    const showResult = useMemo(()=>{
        if(showData == undefined) return {pay:0,income:0,total:0}
         const pay = showData.filter(item=>item.type==='pay').reduce((pre,cur)=>pre+cur.money,0)
         const income = showData.filter(item=>item.type==='income').reduce((pre,cur)=>pre+cur.money,0)
    return {pay:pay*-1,income,total:pay+income}
    },[showData])

    // 初始化展示当月数据
    useEffect(()=>{
        setShowData(monthBillList[dayjs(new Date()).format('YYYY-M')])
    },[monthBillList])

    return (
        <div className="monthlyBill">
            <NavBar className="nav" backArrow={false}>
                月度收支
            </NavBar>
            <div className="content">
                <div className="header">
                    {/* 时间切换区域 */}
                    <div className="date">
                        <span className="text">
                            {dayjs(date).format('YYYY | M月') + '账单'}
                        </span>
                        <span className={classNames('arrow', dateVisable && 'expand')} onClick={() => setDateVisable(true)}></span>
                    </div>
                    {/* 统计区域 */}
                    <div className='twoLineOverview'>
                        <div className="item">
                            <span className="money">{showResult.pay.toFixed(2)}</span>
                            <span className="type">支出</span>
                        </div>
                        <div className="item">
                            <span className="money">{showResult.income.toFixed(2)}</span>
                            <span className="type">收入</span>
                        </div>
                        <div className="item">
                            <span className="money">{showResult.total.toFixed(2)}</span>
                            <span className="type">结余</span>
                        </div>
                    </div>
                    {/* 时间选择器 */}
                    <DatePicker
                        className="kaDate"
                        title="记账日期"
                        precision="month"
                        visible={dateVisable}
                        max={new Date()}
                        onClose={() => setDateVisable(false)}
                        onConfirm={(date) => { setDate(date);setShowData(monthBillList[dayjs(date).format('YYYY-M')])}}
                    />
                </div>
            </div>
        </div >
    )
}

export default Month