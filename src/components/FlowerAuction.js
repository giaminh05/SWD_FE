import Header from "./Header";
import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Dashboard from "./Dashboard";

export default function FlowerAuction() {
  const { Header, Content, Footer, Sider } = Layout;

  const items2 = [UserOutlined].map((icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: "Category",
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `Dashboard ${subKey}`,
        };
      }),
    };
  });

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "1000" }}>
      <Layout style={{ width: "100%" }}>
        <Content style={{ padding: "0 48px" }}>
          <Layout
            style={{
              height: "900px",
              padding: "24px 0",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              margin: "0 auto",
            }}
          >
            <Sider style={{ background: colorBgContainer }} width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
                items={items2}
              />
            </Sider>
            <Dashboard style={{ height: "100%" }} />
          </Layout>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer> */}
      </Layout>
    </div>
  );
}
