import React, { useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Select, Typography, Divider, Space, Upload } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const RecipeRegister = () => {
    return (
        <>
            <Head>
                <title>레시피 작성|요미</title>
            </Head>
            <AppLayout>
                <div>
                    <Title level={3}>레시피 작성하기</Title>
                    <Form style={{ maxWidth: 600 }}>
                        <Form.Item label='레시피 제목'>
                            <Input placeholder='예) 쇠고기 미역국 끓이기' />
                        </Form.Item>
                        <Form.Item label='요리 소개'>
                            <TextArea
                                rows={4}
                                placeholder='레시피에 대해 간단히 소개해 주세요.'
                            />
                        </Form.Item>
                        <Form.Item
                            label='카테고리'
                            style={{
                                display: 'inline-block',
                            }}
                        >
                            <Select
                                placeholder='대분류'
                                style={{
                                    marginBottom: '10px',
                                }}
                            >
                                <Select.Option value='demo'>Demo</Select.Option>
                            </Select>
                            <Select
                                placeholder='중분류'
                                style={{
                                    marginBottom: '10px',
                                }}
                            >
                                <Select.Option value='demo'>Demo</Select.Option>
                            </Select>
                            <Select
                                placeholder='소분류'
                                style={{
                                    marginBottom: '10px',
                                }}
                            >
                                <Select.Option value='demo'>Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <div>
                            <Form.Item
                                label='인분'
                                style={{
                                    display: 'inline-block',
                                    marginRight: '15px',
                                }}
                            >
                                <InputNumber placeholder='인원수'></InputNumber>
                            </Form.Item>
                            <Form.Item
                                label='소요시간'
                                style={{
                                    display: 'inline-block',
                                    marginRight: '15px',
                                }}
                            >
                                <InputNumber placeholder='분 단위'></InputNumber>
                            </Form.Item>
                            <Form.Item
                                label='난이도'
                                style={{
                                    display: 'inline-block',
                                    marginRight: '15px',
                                }}
                            >
                                <Select placeholder='선택'>
                                    <Select.Option value='demo'>상</Select.Option>
                                    <Select.Option value='demo'>중</Select.Option>
                                    <Select.Option value='demo'>하</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                        <Divider></Divider>
                        <Title level={5}>재료 선택</Title>
                        <Form.List name='list_ingredients'>
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map((field) => (
                                        <Space
                                            key={field.key}
                                            align='baseline'
                                        >
                                            <Form.Item
                                                {...field}
                                                style={{
                                                    display: 'inline-block',
                                                    marginRight: '15px',
                                                }}
                                                label='재료'
                                            >
                                                <Input placeholder='예) 쇠고기' />
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                label='정량'
                                                style={{
                                                    display: 'inline-block',
                                                    marginRight: '15px',
                                                }}
                                            >
                                                <InputNumber placeholder='예) 300g'></InputNumber>
                                            </Form.Item>
                                            <MinusCircleOutlined
                                                onClick={() => remove(field.name)}
                                            />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button
                                            type='dashed'
                                            onClick={() => add()}
                                            block
                                            icon={<PlusOutlined />}
                                        >
                                            재료 추가
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                        <Divider></Divider>
                        <Title level={5}>요리 순서</Title>
                        <Form.List name='list_ingredients'>
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map((field) => (
                                        <Space
                                            key={field.key}
                                            align='baseline'
                                        >
                                            <Form.Item
                                                style={{
                                                    display: 'inline-block',
                                                }}
                                                label='1 단계'
                                            >
                                                <TextArea
                                                    rows={4}
                                                    placeholder='쇠고기는 기름을 떼어 적당한 크기로 썰어 주세요.'
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                style={{
                                                    display: 'inline-block',
                                                    marginLeft: '20px',
                                                }}
                                                valuePropName='fileList'
                                                getValueFromEvent={normFile}
                                            >
                                                <Upload
                                                    action='/upload.do'
                                                    listType='picture-card'
                                                >
                                                    <div>
                                                        <PlusOutlined />
                                                        <div
                                                            style={{
                                                                marginTop: 8,
                                                            }}
                                                        >
                                                            사진 선택
                                                        </div>
                                                    </div>
                                                </Upload>
                                            </Form.Item>
                                            <MinusCircleOutlined
                                                onClick={() => remove(field.name)}
                                            />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button
                                            type='dashed'
                                            onClick={() => add()}
                                            block
                                            icon={<PlusOutlined />}
                                        >
                                            단계 추가
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>

                        <Divider></Divider>
                        <Form.Item>
                            <Button
                                type='primary'
                                htmlType='submit'
                                href='/recipe-view'
                            >
                                레시피 등록
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </AppLayout>
        </>
    );
};

export default RecipeRegister;
