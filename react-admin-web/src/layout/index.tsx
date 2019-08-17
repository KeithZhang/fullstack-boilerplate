import { Avatar, Icon, Layout } from 'antd';
import React from 'react';

import BossMenu from './menu';

const { Sider, Header, Content } = Layout;

// @CombineModal({ ModalForm })
// @connect(state => ({
//   routerStore: state.router,
//   menuList: state.user.menuInfo
// }))
class BasicLayout extends React.Component {
  userName = '暂无';
  userIcon = '';

  state = {
    collapsed: false
  };

  componentDidMount() {
    const userInfo = window.userInfo;
    this.userIcon = userInfo.avatar;
    this.userName = userInfo.user.name || '暂无';
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleClick = () => {
    const formValues = {},
      customData = {};
    // this.props.show('ModalForm')({
    //   title: '退出',
    //   dataSource: this.dataReject(),
    //   width: '400px',
    //   formValues,
    //   customData,
    //   handleToSubmit: (ModalFormdata, close) => {
    //     StorageUtils.setJSON('userInfo', {});
    //     StorageUtils.set('token', '');
    //     StorageUtils.set('menuInfo', []);
    //     // 退出前重置路由
    //     StorageUtils.set('redirectPath', '/auth/user-manage');
    //     this.props.history.push('/login');
    //   }
    // });
  };
  dataReject = () => [
    {
      name: 'out',
      itemRender: <span style={{ fontSize: '16px' }}>确定要退出系统吗？</span>
    }
  ];

  render() {
    const menuList = window.menuList;
    console.log('menuList...', menuList);

    return (
      <Layout className="main">
        <Sider
          className="boss-left"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          collapsedWidth="6vw"
          width="13vw"
        >
          <div
            className="logo headerbg-top-color fontColor"
            style={{ background: '@normal-color' }}
          >
            <img src={require('../images/logo.png')} />
          </div>
          <BossMenu
            ref="menu"
            collapsed={this.state.collapsed}
            datasource={menuList || []}
            pathname={location.pathname}
          />
        </Sider>
        <Layout>
          <Header className="boss-header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div
              style={{
                float: 'right',
                height: '100%',
                overflow: 'hidden'
              }}
            >
              <Avatar
                style={{ backgroundColor: 'rgb(93, 101, 90)' }}
                icon="user"
                src={this.userIcon}
              />
              <div
                style={{
                  display: 'inline-block',
                  cursor: 'pointer'
                }}
                onClick={this.handleClick}
              >
                <span
                  style={{
                    fontSize: '16px',
                    color: '#E9CC8F'
                  }}
                >
                  {this.userName}
                </span>
                <Icon
                  type="down"
                  style={{
                    fontSize: '5px',
                    color: '#E9CC8F'
                  }}
                />
              </div>
            </div>
          </Header>
          <Content>{this.props.children}</Content>
        </Layout>
      </Layout>
    );
  }
}

// export default withRouter(BasicLayout);

export default BasicLayout;
