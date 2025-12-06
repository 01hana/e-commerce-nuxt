import type { RadioGroupItem } from '@nuxt/ui';

export const orderStatus = [
  { label: '待付款', value: 'pending' },
  { label: '已付款', value: 'pavalue' },
  { label: '已出貨', value: 'shipped' },
  { label: '已完成', value: 'completed' },
  { label: '已取消', value: 'cancelled' },
];

export const paymentMethods = [
  { label: '信用卡', value: 'credit' },
  { label: '貨到付款', value: 'cod' },
  { label: 'Line Pay', value: 'linepay' },
];

export const shippingMethods = [
  { label: '宅配', value: 'home' },
  { label: '超商取貨', value: 'store' },
];

export const genderOptions: RadioGroupItem[] = [
  { label: '男', value: 'male' },
  { label: '女', value: 'female' },
  { label: '不透露', value: 'unknown' },
];
