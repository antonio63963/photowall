import { Layout, Menu, Breadcrumb } from 'antd';
import style from './mainPage.module.css';
import StartContent from '../../components/StartContent';
import HowBlock from '../../components/HowBlock';
import AuthBlock from '../../components/AuthBlock';
import logo from '../../images/photoWall.svg'
const { Header, Content, Footer } = Layout;


function MainPage() {

  return (
    <Layout className={style.flex_center} style= {{ 'backgroundColor': '#120821', height: '100%', width: '100vw' }}>
      <Layout className={style.sizeApp} >
        <Header className={`${style.flex_center} ${style.header}`}>
            <div className={style.header_content}>
                <img src={logo} style={{ width: '100px' }}/>
              <Menu className={style.menuItem} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item className={style.menuItem} key={`navLinkAbout`}>About App</Menu.Item>
                <Menu.Item className={style.menuItem} key={`navLink1`}>Login</Menu.Item>
                <Menu.Item className={style.menuItem} key={`navLink2`}>Registration</Menu.Item>
                <Menu.Item className={style.menuItem} key={`navLink3`}>Support</Menu.Item>
              </Menu>
            </div>
        </Header>
        <Content className={style.content} >
          <div className="site-layout-content" style={{ paddingTop: '100px'}}>
            <StartContent className={style.StartContent}/>
            <AuthBlock />
            {/* <HowBlock /> */}
          </div>
        </Content>
        <Footer className={style.footer} style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  )
};

export default MainPage;


