import { Layout, Menu } from "antd";
import {
  FileAddOutlined,
  PaperClipOutlined,
  LineChartOutlined
} from "@ant-design/icons";
import styles from "./styles.module.css"

const { Header, Content, Sider } = Layout;

const Home = () => {
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
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
                <Menu.Item key="9"> <FileAddOutlined />Add bill</Menu.Item>
                <Menu.Item key="10"><PaperClipOutlined /> All bills</Menu.Item>
                <Menu.Item key="11"><LineChartOutlined /> Time series graph</Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: "500px" }}>
            Content
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};


export default Home;