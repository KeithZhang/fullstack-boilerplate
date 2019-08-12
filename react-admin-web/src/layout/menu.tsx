import { RouterUtils } from '@/utils';
import { Icon, Menu } from 'antd';
import _ from 'lodash';
import React from 'react';
import { NavLink } from 'react-router-dom';

const { SubMenu, Item } = Menu;

class BossMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKey: '',
      openKeys: '',
      fHide: true,
      menuMap: []
    };
  }

  componentDidMount() {
    this.setMenuOpen(this.state.menuMap);
  }

  componentWillReceiveProps(nextProps) {
    const { collapsed, datasource } = nextProps;
    const pathnamePre = _.get(this.props, 'pathname');
    const pathnameNext = _.get(nextProps, 'pathname');
    if (pathnameNext && pathnamePre && pathnamePre !== pathnameNext) {
      const nextMenuMap = RouterUtils.menuMap(datasource);
      this.setMenuOpen(nextMenuMap);
      this.setState({
        menuMap: nextMenuMap
      });
    }
    if (datasource.length > 0 && this.props.datasource.length === 0) {
      const nextMenuMap = RouterUtils.menuMap(datasource);
      this.setMenuOpen(nextMenuMap);
      this.setState({
        menuMap: nextMenuMap
      });
    }
    if (collapsed) {
      if (this.state.fHide) {
        this.setState({
          openKeys: [],
          fHide: false
        });
      } else {
        this.setState({
          openKeys: [],
          fHide: true
        });
      }
    }
    if (!collapsed && this.props.collapsed) {
      this.setMenuOpen(this.state.menuMap);
    }
  }

  setMenuOpen = menuMap => {
    const currentPath = window.location.pathname;
    let currentMap = {};
    menuMap.map(obj => {
      if (currentPath === obj.value) {
        currentMap = obj;
        this.setState({
          currentKey: currentMap.value,
          openKeys: [currentMap.key]
        });
      }
    });
  };

  onOpenChange = openKeys => {
    if (openKeys.length === 1 || openKeys.length === 0) {
      this.setState({
        openKeys
      });
      return;
    }
    const latestOpenKey = openKeys[openKeys.length - 1];
    if (latestOpenKey.includes(openKeys[0])) {
      this.setState({
        openKeys
      });
    } else {
      this.setState({
        openKeys: [latestOpenKey]
      });
    }
  };

  onClick = ({ key, keyPath }) => {
    this.menuMap = keyPath;
    this.setState({
      currentKey: key
    });
  };

  render() {
    const { datasource } = this.props;
    const { currentKey, openKeys } = this.state;
    const menuProps = {
      mode: 'inline',
      theme: 'dark',
      openKeys: openKeys,
      selectedKeys: [currentKey],
      onOpenChange: this.onOpenChange,
      onClick: this.onClick
    };

    return (
      <Menu {...menuProps}>
        {datasource.map(menu => {
          const title = (
            <span>
              <Icon type={'dashboard' || menu.icon} />
              <span>{menu.name}</span>
            </span>
          );
          const children = _.get(menu, 'children') || []; //_.get (menu, 'childRoutes') || [];
          if (children.length <= 0) {
            return (
              <Item key={menu.id}>
                <NavLink to={menu.path}>
                  <Icon type={menu.icon} />
                  {menu.name}
                </NavLink>
              </Item>
            );
          }
          return (
            <SubMenu key={menu.id} title={title}>
              {children.map(item => {
                if (item.hideOfSider) {
                  return null;
                }
                return (
                  <Item key={item.path}>
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    );
  }
}

export default BossMenu;
