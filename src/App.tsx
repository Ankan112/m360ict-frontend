import { Layout, Menu, theme } from "antd";
import paper from "./assets/icons/paper.svg";
import menu from "./assets/icons/menu.svg";
import sales from "./assets/icons/sales.svg";
import users from "./assets/icons/user.svg";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    id: 1,
    icon: menu,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    icon: users,
    label: "Users",
    path: "/dashboard/users",
  },
  {
    id: 3,
    icon: sales,
    label: "Sales",
    path: "/dashboard/sales",
  },
].map((items) => ({
  key: items.id,
  icon: <img src={items.icon} alt="" />,
  label: (
    <Link
      to={items.path}
      style={{ fontSize: "14px", fontWeight: 500, color: "#A7AFBC" }}
    >
      {items.label}
    </Link>
  ),
}));

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div className="main-container">
      <Layout style={{ backgroundColor: "white" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{ background: "white" }}
          width={249}
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              paddingTop: "31px",
              paddingLeft: "34px",
            }}
          >
            <div>
              <img src={paper} alt="paper" />
            </div>
            <p
              style={{
                marginLeft: "12px",
                fontSize: "28px",
                fontWeight: 700,
                color: "#4E5D78",
              }}
            >
              Stack
            </p>
          </div>
          <p
            style={{
              color: "#B0B7C3",
              fontSize: "12px",
              fontWeight: 500,
              backgroundColor: "white",
              paddingTop: "40px",
              paddingLeft: "34px",
              paddingBottom: "28px",
            }}
          >
            PAGES
          </p>
          <Menu
            // theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            style={{
              width: "216px",
              margin: "auto",
              backgroundColor: "white",
            }}
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}></Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
