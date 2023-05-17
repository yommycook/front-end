import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Button, Form, Input, List, Affix, Typography, Col, Row, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined, SendOutlined } from '@ant-design/icons';
import moment from 'moment';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroll-component';

const ChatUI = () => {
    const [form] = Form.useForm();
    const { TextArea } = Input;

    const [userComment, setUserComment] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [chatMent, setChatMent] = useState({
        guidance: '안녕하세요. 쿼카 GPT입니다. 요리에 관한 궁금한 점을 언제든지 물어봐주세요!',
    });

    const InputComment = () => {
        const newComment = [...userComment];
        newComment.push(inputValue);
        setUserComment(newComment);
        setInputValue('');
        form.resetFields();
    };

    return (
        <>
            <Head>
                <title>쿼카GPT|요미</title>
            </Head>

            <AppLayout>
                <div style={{ height: '80vh', overflow: 'hidden' }}>
                    <div style={{ height: '60vh', padding: '30px', overflow: 'scroll' }}>
                        <MentView chatMent={chatMent} />
                        <UserView userComment={userComment} />
                    </div>
                    <Form
                        form={form}
                        layout='vertical'
                        autoComplete='off'
                    >
                        <div style={{ height: '35vh', margin: '30px' }}>
                            <Row>
                                <Col span={22}>
                                    <Form.Item
                                        name='name'
                                        style={{ paddingRight: '10px', paddingLeft: '10px' }}
                                    >
                                        <TextArea
                                            rows={2}
                                            onPressEnter={InputComment}
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={2}>
                                    <Button
                                        type='primary'
                                        shape='circle'
                                        icon={<SendOutlined />}
                                        onClick={InputComment}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </div>
            </AppLayout>
        </>
    );
};

const UserView = ({ userComment }) => {
    return (
        <Space
            direction='vertical'
            style={{ float: 'right' }}
        >
            {userComment.map((item, index) => (
                <div
                    key={index}
                    style={{
                        display: 'inline-block',
                        float: 'right',
                    }}
                >
                    <Typography>
                        <pre style={{ backgroundColor: 'pink' }}>{item}</pre>
                    </Typography>
                </div>
            ))}
        </Space>
    );
};

const MentView = ({ chatMent }) => {
    return (
        <div>
            <Space>
                <Avatar
                    size='large'
                    src={
                        <img src='data:image/jpeg;base64,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' />
                    }
                />
                <Typography
                    style={{
                        display: 'inline-block',
                        marginLeft: '10px',
                    }}
                >
                    <pre>{chatMent.guidance}</pre>
                </Typography>
            </Space>
        </div>
    );
};

export default ChatUI;
