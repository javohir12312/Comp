import React from 'react'
import style from "./Katalog.module.scss"
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Комплектующие ПК', 'sub1', <MailOutlined />, [
    getItem(null, null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem(null, null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Мониторы', 'sub2', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Компьютеры', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Ноутбуки', 'sub5', <MailOutlined />, [
    getItem(null, null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem(null, null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Игровые консоли', 'sub6', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub7', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Комплектующие к ноутбукам', 'sub8', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Планшеты', 'sub9', <MailOutlined />, [
    getItem(null, null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem(null, null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Принтеры и МФУ', 'sub10', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub11', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Акустические колонки', 'sub12', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),getItem('Комплектующие к ноутбукам', 'sub13', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Планшеты', 'sub14', <MailOutlined />, [
    getItem(null, null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem(null, null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Принтеры и МФУ', 'sub15', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub16', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Акустические колонки', 'sub17', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Комплектующие к ноутбукам', 'sub18', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Планшеты', 'sub19', <MailOutlined />, [
    getItem(null, null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem(null, null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Принтеры и МФУ', 'sub20', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('dasdasd', 'sub11', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Акустические колонки', 'sub21', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('javava 12', '12'),
  ]),
  
  
];
const onClick = (e) => {
  console.log('click', e);
};


const Katalog = () => (
  <Menu
  className={style.menu}
    onClick={onClick}
    mode="vertical"
    items={items}
  />
);

export default Katalog;