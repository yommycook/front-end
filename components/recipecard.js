import React from 'react';
import { TeamOutlined, ClockCircleOutlined, FireOutlined } from '@ant-design/icons';
import { Avatar, Card, Typography, Popover, Space } from 'antd';

import { modifyTime } from '../service/factory';

const { Meta } = Card;
const { Text } = Typography;
const RecipeCard = ({ item }) => {
    return (
        <>
            <Card
                style={{ width: 240 }}
                cover={
                    <img
                        alt='example'
                        src={item.how_to_make[0] && item.how_to_make[0].cook_image}
                        style={{ width: '10%', height: 'auto' }}
                    />
                }
            >
                <Meta
                    avatar={
                        <Popover content={item.owner}>
                            <Avatar src={item.owner} />
                        </Popover>
                    }
                    title={item.title}
                />
                <div style={{ marginTop: '15px' }}>
                    <Text>{item.recipeDescription}</Text>
                </div>
                <div style={{ marginTop: '13px' }}>
                    <Space style={{ marginRight: '12px' }}>
                        <TeamOutlined style={{ color: 'gray' }} />
                        <p style={{ color: 'gray' }}>{item.person} 인분</p>
                    </Space>
                    <Space style={{ marginRight: '12px' }}>
                        <ClockCircleOutlined style={{ color: 'gray' }} />
                        <p style={{ color: 'gray' }}>{item.cookingTime} 분</p>
                    </Space>
                    <Space style={{ marginRight: '12px' }}>
                        <FireOutlined style={{ color: 'gray' }} />
                        <p style={{ color: 'gray' }}>{item.difficulty}</p>
                    </Space>
                </div>
                <Text style={{ color: 'gray', float: 'right' }}>{item.createdAt.slice(0, 10)}</Text>
            </Card>
        </>
    );
};

export default RecipeCard;
