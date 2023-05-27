import React from 'react';
import { Button, Form, Input, Typography, Space, Avatar, Rate, Divider } from 'antd';

const { Title, Text } = Typography;
const { TextArea } = Input;

const Comment = () => {
    return (
        <>
            <div>
                <Space
                    align='start'
                    style={{ width: '100%', marginLeft: '50px' }}
                >
                    <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
                    <div>
                        <Form.Item>
                            <TextArea rows={3} />
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
                </div>
            </Space>
        </>
    );
};
export default Comment;
