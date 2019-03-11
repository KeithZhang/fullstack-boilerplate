import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  LayoutAnimation,
  FlatListProps
} from 'react-native';
import { ActivityIndicator } from '@ant-design/react-native';
import { YouText } from 'you-ui';

export interface DataApi {
  isAll(): boolean;
  isEmpty(): boolean;
  refresh: <T>() => Promise<Array<T>>;
  next: <T>() => Promise<Array<T>>;
}

interface YouListTypes<ItemT> extends FlatListProps<ItemT> {
  keyName?: string;
  dataApi: DataApi;
}

export default class YouList<T> extends Component<YouListTypes<T>, any> {
  static defaultProps = {};

  listRef: any;

  state = {
    refreshing: false,
    initLoading: false,
    nextLoading: false
  };

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  async componentWillMount() {
    await this.onRefresh();
  }

  render() {
    const {
      children,
      dataApi,
      keyName,
      ListEmptyComponent,
      ListFooterComponent,
      ...others
    } = this.props;
    const { refreshing } = this.state;

    return (
      <FlatList
        {...others}
        ref={flatList => (this.listRef = flatList)}
        keyExtractor={(item: any, index: number) =>
          (keyName ? item[keyName] : index) + ''
        }
        ListEmptyComponent={
          ListEmptyComponent
            ? ListEmptyComponent
            : this.defaultListEmptyComponent
        }
        ListFooterComponent={
          ListFooterComponent
            ? ListFooterComponent
            : this.defaultListFooterComponent
        }
        onEndReachedThreshold={0.2}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={this.onRefresh}
            title={refreshing ? '刷新数据中...' : '松开立即更新'}
          />
        }
        onEndReached={this.onNext}
      />
    );
  }

  defaultListEmptyComponent = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <YouText>没有数据，试试下拉刷新</YouText>
    </View>
  );

  defaultListFooterComponent = () => (
    <ActivityIndicator
      text="加载数据中..."
      animating={this.state.nextLoading}
    />
  );

  onRefresh = async (): Promise<any> => {
    this.setState({ refreshing: true });

    const initData = await this.props.dataApi.refresh();

    this.setState({ refreshing: false, dataList: initData });
  };

  onNext = async () => {
    if (__DEV__) {
      console.log('请求下一页');
    }
    this.setState({
      nextLoading: true
    });
    await this.props.dataApi.next();
    this.setState({
      nextLoading: false
    });
  };
}
