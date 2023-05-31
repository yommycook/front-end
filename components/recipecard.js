import React from 'react';

import { TeamOutlined, ClockCircleOutlined, FireOutlined } from '@ant-design/icons';
import { Avatar, Card, Typography, Popover, Space, Skeleton } from 'antd';

import { modifyTime } from '../service/factory';

const { Meta } = Card;
const { Text } = Typography;
const RecipeCard = ({ item, onClick }) => {
    return (
        <div onClick={onClick}>
            <Card
                style={{ width: 240 }}
                cover={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: 'auto', // or set to a specific value e.g. 200px
                        }}
                    >
                        <img
                            alt='example'
                            src={
                                item.how_to_make[0] &&
                                item.how_to_make[0].cook_image !== 'cooking_image_url'
                                    ? item.how_to_make[0].cook_image
                                    : 'https://firebasestorage.googleapis.com/v0/b/study-from-cafe.appspot.com/o/imagesrc%2FSpinner-1s-200px%20(1).gif?alt=media&token=4f60c176-cbc8-423c-a459-2b2ae8f58375'
                            }
                            style={{ width: '50%', height: 'auto' }}
                        />
                    </div>
                }
            >
                <Meta
                    avatar={
                        <Popover content={item.owner}>
                            <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
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
        </div>
    );
};

export default RecipeCard;
