import React, { useState, useEffect } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Select, Typography, Divider, Space, Upload } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const CookStep = ({ setRecipeData }) => {
    const [stepList, setStepList] = useState([]);

    const handleStepChange = (e, index) => {
        const updatedList = [...stepList];
        updatedList[index] = { ...updatedList[index], description: e.target.value };
        setStepList(updatedList);
    };

    const handleFileChange = (info, index) => {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-1); // Keep last uploaded file only

        setStepList((list) => {
            const newList = [...list];
            newList[index] = { ...newList[index], fileList };
            return newList;
        });
    };

    useEffect(() => {
        setRecipeData((prevData) => ({
            ...prevData,
            stepList: stepList,
        }));
    }, [stepList]);

    return (
        <>
            <Title level={5}>요리 순서</Title>
            <Form.List name='list_step'>
                {(fields, { add, remove }) => (
                    <>
                        {fields.map((field, index) => (
                            <Space
                                key={field.key}
                                align='baseline'
                            >
                                <Form.Item
                                    style={{ display: 'inline-block' }}
                                    label={`Step ${index + 1}`}
                                >
                                    <TextArea
                                        rows={4}
                                        placeholder='쇠고기는 기름을 떼어 적당한 크기로 썰어 주세요.'
                                        onChange={(e) => handleStepChange(e, field.key)}
                                    />
                                </Form.Item>
                                <Form.Item
                                    style={{ display: 'inline-block', marginLeft: '20px' }}
                                    valuePropName='fileList'
                                >
                                    <Upload
                                        action='/upload.do'
                                        listType='picture-card'
                                        accept='image/*'
                                        onChange={(info) => handleFileChange(info, field.key)}
                                        multiple={false}
                                        beforeUpload={() => false}
                                        fileList={stepList[field.key]?.fileList ?? []}
                                    >
                                        <div>
                                            <PlusOutlined />
                                            <div style={{ marginTop: 8 }}>사진 선택</div>
                                        </div>
                                    </Upload>
                                </Form.Item>
                                <MinusCircleOutlined
                                    onClick={() => {
                                        const newStepList = stepList.filter(
                                            (_, idx) => idx !== field.key
                                        );
                                        setStepList(newStepList);
                                        remove(field.key);
                                    }}
                                />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button
                                type='dashed'
                                onClick={() => {
                                    add();
                                    setStepList([...stepList, {}]);
                                }}
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
