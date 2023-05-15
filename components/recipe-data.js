import React from 'react';
import { Button, Form, Input, InputNumber, Select, Typography, Divider, Space, Upload } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const RecipeData = () => {
    return (
        <>
            <Form.Item label='레시피 제목'>
                <Input placeholder='예) 쇠고기 미역국 끓이기' />
            </Form.Item>
            <Form.Item
                label='요리 완성 사진'
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
        </>
    );
};

export default RecipeData;
