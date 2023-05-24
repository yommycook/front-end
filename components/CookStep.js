import React, { useState, useEffect, useRef } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Select, Typography, Divider, Space, Upload } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const CookStep = ({ setRecipeData }) => {
    const [how_to_make, setHow_to_make] = useState([]);
    const pref = useRef();

    const handleStepChange = (e, index) => {
        const updatedList = [...how_to_make];
        updatedList[index] = { ...updatedList[index], description: e.target.value };
        setHow_to_make(updatedList);
    };

    const handleFileChange = (info, index) => {
        const picture = pref.current;
        console.log('picture: ', picture);
        const fileListForDB = info.fileList[0]?.originFileObj;
        console.log(fileListForDB);

        console.log(info);
        let cook_image = [...info.fileList];
        cook_image = cook_image.slice(-1); // Keep last uploaded file only

        setHow_to_make((list) => {
            const newList = [...list];
            newList[index] = { ...newList[index], cook_image, fileListForDB };
            return newList;
        });
    };

    useEffect(() => {
        setRecipeData((prevData) => ({
            ...prevData,
            how_to_make: how_to_make,
        }));
    }, [how_to_make]);

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
                                        ref={pref}
                                        action='/upload.do'
                                        listType='picture-card'
                                        accept='image/*'
                                        onChange={(info) => handleFileChange(info, field.key)}
                                        multiple={false}
                                        beforeUpload={() => false}
                                        fileList={how_to_make[field.key]?.cook_image ?? []}
                                    >
                                        <div>
                                            <PlusOutlined />
                                            <div style={{ marginTop: 8 }}>사진 선택</div>
                                        </div>
                                    </Upload>
                                </Form.Item>
                                <MinusCircleOutlined
                                    onClick={() => {
                                        const newHohow_to_make = how_to_make.filter(
                                            (_, idx) => idx !== field.key
                                        );
                                        setHow_to_make(newHohow_to_make);
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
                                    setHow_to_make([...how_to_make, {}]);
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
