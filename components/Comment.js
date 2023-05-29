import React, { createElement, useState } from 'react';
import { Button, Form, Input, Typography, Space, Avatar, Row, Col, Tooltip } from 'antd';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

const Comment = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip
            key='comment-basic-like'
            title='좋아요'
        >
            <span
                onClick={like}
                style={{ marginRight: '20px', color: 'gray' }}
            >
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className='comment-action'>{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip
            key='comment-basic-dislike'
            title='싫어요'
        >
            <span
                onClick={dislike}
                style={{ marginRight: '20px', color: 'gray' }}
            >
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className='comment-action'>{dislikes}</span>
            </span>
        </Tooltip>,
    ];
    return (
        <>
            <div>
                <Space
                    align='start'
                    style={{ width: '100%', marginLeft: '50px' }}
                >
                    <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
                    <div style={{ width: '500px' }}>
                        <Form.Item block>
                            <TextArea
                                block
                                rows={3}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                htmlType='submit'
                                type='primary'
                            >
                                Add Comment
                            </Button>
                        </Form.Item>
                    </div>
                </Space>
            </div>
            <Space
                align='start'
                style={{ width: '100%', marginLeft: '50px', marginTop: '30px' }}
            >
                <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
                <div style={{ marginLeft: '10px' }}>
                    <Text strong>백종원</Text>
                    <Text
                        disabled
                        style={{ marginLeft: '10px' }}
                    >
                        10 시간 전
                    </Text>
                    <br />
                    <Text>이 레시피대로 조리했는데, 너무 맛있네요! 진짜 짱입니다!</Text>
                    <br />
                    <div style={{ marginTop: '10px' }}>{actions}</div>
                </div>
            </Space>
        </>
    );
};
export default Comment;
