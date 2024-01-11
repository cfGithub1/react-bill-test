import { Outlet } from "react-router-dom";
import { Button } from "antd-mobile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBillList } from "@/store/modules/billStore";

const Layout = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getBillList())
    },[dispatch])
    return (
        <div>
            <Outlet />layout
            <Button color="primary">全局生效样式</Button>
            <div className="homo">
                <Button color="primary">局部生效样式</Button>
            </div>
        </div>
    )
}
export default Layout;