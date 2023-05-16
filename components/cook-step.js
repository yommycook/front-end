import React from 'react';
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

const CookStep = () => {
    return (
        <>
            <Title level={5}>요리 순서</Title>
            <Form.List name='list_step'>
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
                                <MinusCircleOutlined onClick={() => remove(field.name)} />
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
        </>
    );
};

export default CookStep;
