import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Select, Typography, Divider, Space, Upload } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const IngredientsData = () => {
    return (
        <>
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
                                재료 추가
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </>
    );
};

export default IngredientsData;
