import { Layout, Menu, Breadcrumb } from 'antd';
import style from './mainPage.module.css';
import StartContent from '../../components/StartContent';

const { Header, Content, Footer } = Layout;


function MainPage() {

  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key={`navLink1`}>Login</Menu.Item>
        <Menu.Item key={`navLink2`}>Registration</Menu.Item>
        <Menu.Item key={`navLink3`}>Support</Menu.Item>
      </Menu>
    </Header>
    <Content className={style.content} style={{ padding: '0 50px' }}>
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-layout-content">
      <StartContent />
        
      </div>
    </Content>
    <Footer className={style.footer} style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
};

export default MainPage;
