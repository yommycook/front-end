import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { WechatOutlined } from '@ant-design/icons';
import { Menu, FloatButton } from 'antd';

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href='/'>나의 레시피</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link href='/category'>분류</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/measure'>간이계량</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/mypage'>마이페이지</Link>
                </Menu.Item>
            </Menu>
            {children}
            <FloatButton
                icon={<WechatOutlined />}
                tooltip={<div>무엇이든 질문하기</div>}
                href='/chatUI'
                style={{
                    top: 700,
                }}
            />
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
