import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Button, Form, Input, List, Affix, Typography, Col, Row, Space, Spin } from 'antd';
import {
    MinusCircleOutlined,
    PlusOutlined,
    SendOutlined,
    LoadingOutlined,
} from '@ant-design/icons';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import InfiniteScroll from 'react-infinite-scroll-component';
import { keywords } from '../public/keywords';
import MentView from '../components/MentView';
import UserView from '../components/UserView';
const ChatUI = () => {
    const [form] = Form.useForm();
    const { TextArea } = Input;
    const [value, setValue] = useState('');
    const [message, setMessage] = useState({});
    const [previousChats, setPreviousChats] = useState([]);
    const [loading, setLoading] = useState(false); // loading 상태 추가

    useEffect(() => {
        if (value && message) {
            setPreviousChats((prevState) => [
                ...prevState,
                {
                    user: {
                        role: 'user',
                        content: value,
                    },
                    gpt: {
                        role: message.role,
                        content: message.content,
                    },
                },
            ]);
        }
    }, [message]);

    const checkForFoodKeywords = (value) => {
        for (let i = 0; i < keywords.length; i++) {
            if (value.includes(keywords[i])) {
                return true;
            }
        }
        return false;
    };

    const getMessage = async () => {
        setLoading(true); // 로딩 상태 시작

        const options = {
            method: 'POST',
            body: JSON.stringify({
                message: value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (value.includes('안녕')) {
            setMessage({
                role: 'gpt',
                content: '반갑습니다! 저는 요미서비스의 쿼카입니다!',
            });
        } else {
            try {
                const response = await fetch('http://localhost:8000/completions', options);
                const data = await response.json();

                console.log('data:', data);

                setMessage(data.choices[0]?.message);
            } catch (error) {
                console.log(error);
            }
        }
        setLoading(false); // 로딩 상태 종료
    };

    return (
        <>
            <Head>
                <title>쿼카GPT|요미</title>
            </Head>

            <AppLayout>
                <div style={{ height: '80vh', overflow: 'hidden' }}>
                    <div style={{ height: '60vh', padding: '30px', overflow: 'scroll' }}>
                        <MentView
                            key={`gpt_hello`}
                            chatMent={
                                '안녕하세요 쿼카 GPT입니다. 요리에 관한 궁금한 점을 언제든지 물어봐주세요!'
                            }
                        />
                        {previousChats?.map((chatMessage, index) => (
                            <>
                                <UserView
                                    key={`user_${chatMessage.user.content}`}
                                    userComment={chatMessage.user.content}
                                />

                                <MentView
                                    key={`gpt_${chatMessage.user.content}`}
                                    chatMent={chatMessage.gpt.content}
                                />
                            </>
                        ))}
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
                                            onChange={(e) => setValue(e.target.value)}
                                        />
                                    </Form.Item>
                                </Col>
                                {loading ? (
                                    <Col span={2}>
                                        <LoadingOutlined />
                                    </Col>
                                ) : (
                                    <Col span={2}>
                                        :
                                        <Button
                                            type='primary'
                                            shape='circle'
                                            icon={<SendOutlined />}
                                            onClick={getMessage}
                                            disabled={loading} // 로딩 중에는 버튼 비활성화
                                        />
                                    </Col>
                                )}
                            </Row>
                            {loading && (
                                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                    <Spin /> {/* 로딩 중인 상태를 나타내는 Spin 컴포넌트 */}
                                </div>
                            )}
                        </div>
                    </Form>
                </div>
            </AppLayout>
        </>
    );
};

export default ChatUI;
