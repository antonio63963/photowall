import { Layout, Menu, Breadcrumb } from 'antd';
import style from './mainPage.module.css';
import StartContent from '../../components/StartContent';
import HowBlock from '../../components/HowBlock';
import logo from '../../images/photoWall.svg'
const { Header, Content, Footer } = Layout;


function MainPage() {

  return (
    <Layout className={style.flex_center} style= {{ 'background-color': '#120821', height: '100vh' }}>
      <Layout className={style.sizeApp} >
        <Header className={`${style.flex_center} ${style.header}`}>
              <img src={logo} style={{ width: '100px' }}/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key={`navLinkAbout`}>About App</Menu.Item>
              <Menu.Item key={`navLink1`}>Login</Menu.Item>
              <Menu.Item key={`navLink2`}>Registration</Menu.Item>
              <Menu.Item key={`navLink3`}>Support</Menu.Item>
            </Menu>
        </Header>
        <Content className={style.content} >
          <div className="site-layout-content">
          <StartContent />
          <HowBlock />
          </div>
        </Content>
        <Footer className={style.footer} style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  )
};

export default MainPage;
