import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './css/layout.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MainLayout extends React.Component{


    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };


      render() {
        const { collapsed } = this.state;
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/category">Category</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Product">
                  <Menu.Item key="3"><Link to="/add-product">Products</Link></Menu.Item>
                  <Menu.Item key="4"><Link to="/product">Manage Products</Link></Menu.Item>                  
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Orders">
                  <Menu.Item key="6"><Link to="/order">Orders</Link></Menu.Item>
                  <Menu.Item key="8"><Link to="/manage-orders">Manage Orders</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                <Link to="/report">Report</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }} />
              <Content style={{ margin: '0 10px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>                 
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 450 }}>
                  {this.props.children}                  
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Inventory Application 2022</Footer>
            </Layout>
          </Layout>
        );
      }
}

export default MainLayout;