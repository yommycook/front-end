import React from 'react';

import { Card, List, Typography, Avatar, Space, Popover } from 'antd';
import { TeamOutlined, ClockCircleOutlined, FireOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
const { Meta } = Card;

// 카드 요소 렌더링에 필수적인 데이터
const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
];

const CardBoard = () => (
    <>
        <Title level={4}>최근에 등록된 레시피</Title>
        <div style={{ display: 'flex' }}>
            <List
                grid={{
                    gutter: 16,
                    column: 4,
                }}
                itemLayout='vertical'
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            style={{ width: 240 }}
                            cover={
                                <img
                                    alt='example'
                                    src='data:image/jpeg;base64,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'
                                />
                            }
                        >
                            <Meta
                                avatar={
                                    <Popover content='awesomecook'>
                                        <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
                                    </Popover>
                                }
                                title={item.title}
                            />
                            <div style={{ marginTop: '15px' }}>
                                <Text>이렇게만하면 완벽! 초간단 미역국 레시피</Text>
                            </div>
                            <div style={{ marginTop: '13px' }}>
                                <Space style={{ marginRight: '12px' }}>
                                    <TeamOutlined style={{ color: 'gray' }} />
                                    <p style={{ color: 'gray' }}>4 인분</p>
                                </Space>
                                <Space style={{ marginRight: '12px' }}>
                                    <ClockCircleOutlined style={{ color: 'gray' }} />
                                    <p style={{ color: 'gray' }}>110 분</p>
                                </Space>
                                <Space style={{ marginRight: '12px' }}>
                                    <FireOutlined style={{ color: 'gray' }} />
                                    <p style={{ color: 'gray' }}>하</p>
                                </Space>
                            </div>
                            <Text style={{ color: 'gray', float: 'right' }}>2023-05-25</Text>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    </>
);
export default CardBoard;
