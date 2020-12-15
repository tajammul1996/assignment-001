import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  FileAddOutlined,
  PaperClipOutlined,
  LineChartOutlined
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles.module.css"
import { AddBill } from "../../components";
import { addBill } from "../../store/actions/bill.actions"

const { Header, Content, Sider } = Layout;



const Home = () => {
    const [selectedTab, setSelectedTab] = useState("add-bill")
    const dispatch = useDispatch();
    const allBills = useSelector(state => state.bills.allBills);


    console.log(allBills);
  return (
    <Layout style={{height: "100vh"}}>
      <Header className="header">
        <div className="logo" />
        <h2 style={{color: "white"}}>Bright money</h2>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout
          className={styles.siteLayoutBackground}
          style={{ padding: "24px 0" }}
        >
          <Sider className={styles.siteLayoutBackground} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[selectedTab]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
                <Menu.Item key="add-bill" onClick={() => setSelectedTab("add-bill")}> <FileAddOutlined />Add bill</Menu.Item>
                <Menu.Item key="all-bills" onClick={() => setSelectedTab("all-bills")}><PaperClipOutlined /> All bills</Menu.Item>
                <Menu.Item key="graph" onClick={() => setSelectedTab("graph")}><LineChartOutlined /> Time series graph</Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: "500px" }}>
            {selectedTab === "add-bill" && <AddBill onAddBill={(bill) => dispatch(addBill(bill))}/>}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};


export default Home;