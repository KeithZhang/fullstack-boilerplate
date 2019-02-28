const primary = '#4188FB';
const primary_tap = '#1C6AE8';

// 颜色
const color = {
  /** 文字色*/
  text_base: '#383838',
  text_base_inverse: '#ffffff',
  text_disabled: '#cccccc',
  text_caption: '#999999',

  // 链接字体色
  link: primary,

  /** 背景色 */
  fill_base: '#f8f8f8',
  fill_grey: '#dddddd',
  fill_white: '#ffffff',
  fill_mask_base: 'rgba(0, 0, 0, .5)',
  fill_mask_tip: 'rgba(0, 0, 0, .7)',

  /** 品牌 */
  brand_primary: primary,
  brand_primary_tap: primary_tap,
  brand_success: '##3dd77a',
  brand_warning: '#ffbd20',
  brand_error: '#ff5c33',

  // 边框
  border: '#d9d9d9',

  // 分割线
  split: '#f0f0f0'
};

// 字体
const font = {
  // 一级标题，按钮
  head: 17,
  // 辅助文字
  caption: 15,
  // 二级标题
  subhead: 14,
  // 基础字号
  base: 13,
  // 辅助文字小
  caption_sm: 12,
  // 图标描述文字
  icontext: 10
};

// 圆角
const radius = {
  // 客服消息
  sm: 8,
  // 图标
  md: 12,
  // 按钮
  lg: 22
};

// 间距
const spacing = {
  // 水平间距
  h_spacing_sm: 4,
  h_spacing_md: 8,
  h_spacing_lg: 16,

  // 垂直间距
  v_spacing_xs: 4,
  //  v_spacing_sm: 6,
  v_spacing_md: 8,
  v_spacing_lg: 16
  //  v_spacing_xl: 20,
};

// 图标大小
const icon = {
  lg: 24,
  md: 22,
  sm: 20,
  xs: 16
};

// 头像大小
const headIcon = {
  lg: 70,
  md: 50,
  sm: 20
};

// 图片大小
const image = {
  lg: 120,
  md: 80,
  sm: 60
};

// 按钮高度，宽度都是算出来的，不能定宽，但是高度要定高
const btn = {
  height_lg: 44,
  height_md: 36,
  height_sm: 28,
  height_xs: 22,
  height_xss: 18
};

export default {
  color,
  font,
  radius,
  spacing,
  icon,
  headIcon,
  image,
  btn
};
