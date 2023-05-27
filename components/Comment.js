import React from 'react';
import { Button, Form, Input, Typography, Space, Avatar, Rate } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const Comment = () => {
    return (
        <>
            <Rate
                allowHalf
                defaultValue={2.5}
                style={{ margin: '50px' }}
            />
            <br />
            <div>
                <Space
                    align='start'
                    style={{ marginLeft: '50px' }}
                    block
                >
                    <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
                    <div>
                        <Form.Item>
                            <TextArea rows={4} />
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
        </>
    );
};
export default Comment;
