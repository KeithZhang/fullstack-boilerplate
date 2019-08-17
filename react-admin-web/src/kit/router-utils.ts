import _ from 'lodash';

export default {
  isLogin: () => window.userInfo.user,

  isMenuPerssion: (path: any, pathMap: any) => {
    return pathMap.indexOf(path) > -1;
  },

  menuMap: (data: any) => {
    const resultMap: any = [];
    data.map((o: any) => {
      const children = _.get(o, 'children') || [];
      if (children.length <= 0) {
        resultMap.push({
          key: o.id,
          value: o.path
        });
      }
      children.map((item: any) => {
        resultMap.push({
          key: o.id,
          value: item.path
        });
      });
    });
    return resultMap;
  }
};
