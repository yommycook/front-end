import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { WechatOutlined } from '@ant-design/icons';
import { Menu, FloatButton, ConfigProvider, Row, Col, Layout } from 'antd';

const { Footer } = Layout;

const AppLayout = ({ children }) => {
    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#F0965B',
                    },
                }}
            >
                <div style={{ display: 'inline-block' }}>
                    <Row
                        justify='center'
                        gutter={24}
                        style={{ margin: '10px' }}
                    >
                        <Col span={24}>
                            <Menu
                                mode='horizontal'
                                style={{ minWidth: 0, flex: 'auto' }}
                            >
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
                        </Col>
                    </Row>
                </div>
                {children}
                <FloatButton
                    icon={<WechatOutlined />}
                    tooltip={<div>무엇이든 질문하기</div>}
                />
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Yommy ©2023 Created by Kang Daeryeol, Kim Hyunsoo, Kim Hanyul, Lee Jinyi
                </Footer>
            </ConfigProvider>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
