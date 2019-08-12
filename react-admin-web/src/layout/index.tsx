import { Avatar, Icon, Layout } from 'antd';
import _ from 'lodash';
import React, { Component } from 'react';

// import BossMenu from './menu';

const { Sider, Header, Content } = Layout;

export default class BasicLayout extends Component {
  state = {
    collapsed: false
  };

  userIcon = '';
  userName = '';

  componentDidMount() {
    const userInfoJson = JSON.parse(localStorage.getItem('userInfo') || '{}');
    const userInfo = _.get(userInfoJson, 'user');
    this.userIcon = _.get(userInfo, 'avatar');
    this.userName = _.get(userInfoJson, 'user.name') || '暂无';
  }

  render() {
    return (
      <Layout className="main">
        <Sider
          className="boss-left"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div
            className="logo headerbg-top-color fontColor"
            style={{ background: '@normal-color' }}
          >
            Boss
          </div>
          {/* <BossMenu
            ref="menu"
            collapsed={this.state.collapsed}
            datasource={menuList || []}
            pathname={location.pathname}
          /> */}
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
                    color: '#E9CC8F',
                    marginLeft: '10px'
                  }}
                >
                  {this.userName}
                </span>
                <Icon
                  type="right"
                  style={{
                    fontSize: '5px',
                    color: '#E9CC8F',
                    marginLeft: '5px'
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

  handleClick = () => {
    localStorage.clear();
    location.href = '/login';
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
}
