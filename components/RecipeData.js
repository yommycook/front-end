import React, { useEffect, useState } from 'react';

import { Button, Form, Input, InputNumber, Select, Typography, Divider, Space, Upload } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;

const cate = {
    요리: [
        '밑반찬',
        '메인반찬',
        '국/탕',
        '찌개',
        '면',
        '김치',
        '젓갈/장류',
        '양식',
        '덮밥',
        '소스',
        '기타',
    ],
    베이킹: ['과자', '빵', '케이크', '파이', '페이스트리', '기타 디저트'],
    음료: ['주스/에이드', '쉐이크', '커피', '차', '주류', '기타 음료'],
};
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const RecipeData = ({ setRecipeData }) => {
    const [category, setCategory] = useState([null, null, null]);
    const [pictureList, setPictureList] = useState([]);
    // 요리 제목 변경 함수
    const handleTitleChange = (e) => {
        setRecipeData((prevData) => ({
            ...prevData,
            title: e.target.value,
        }));
    };
    // 요리 설명 변경
    const handleRecipeDescriptionChange = (e) => {
        setRecipeData((prevData) => ({
            ...prevData,
            recipeDescription: e.target.value,
        }));
    };
    // 요리 분류 변경
    const handleCategoryChange = (value, index) => {
        setCategory((prevData) => {
            const newCategory = [...prevData];
            newCategory[index] = value;
            return newCategory;
        });
    };
    // 요리 인분수 변경
    const handlePersonChange = (value) => {
        setRecipeData((prevData) => ({
            ...prevData,
            person: value,
        }));
    };
    // 요리 소요시간 변경
    const handleCookingTimeChange = (value) => {
        setRecipeData((prevData) => ({
            ...prevData,
            cookingTime: value,
        }));
    };
    // 요리 난이도 변경
    const handleDifficultyChange = (value) => {
        setRecipeData((prevData) => ({
            ...prevData,
            difficulty: value,
        }));
    };
    // 대표사진 변경
    const handlePictureChange = (info) => {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-1); // Keep last uploaded file only

        setPictureList(fileList);

        setRecipeData((prevData) => ({
            ...prevData,
            picture: fileList.length > 0 ? { fileList: fileList[0] } : null,
        }));
    };

    useEffect(() => {
        setRecipeData((prevData) => ({
            ...prevData,
            category: category,
        }));
    }, [category]);

    return (
        <>
            {/*레시피제목*/}
            <Form.Item label='레시피 제목'>
                <Input
                    placeholder='예) 쇠고기 미역국 끓이기'
                    onChange={handleTitleChange}
                />
            </Form.Item>
            {/*요리 사진*/}
            <Form.Item
                label='요리 완성 사진'
                valuePropName='fileList'
                getValueFromEvent={normFile}
            >
                <Upload
                    action='/upload.do'
                    listType='picture-card'
                    accept='image/*'
                    onChange={handlePictureChange}
                    multiple={false}
                    beforeUpload={() => false}
                    fileList={pictureList}
                    onRemove={() => setPictureList([])}
                >
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>사진 선택</div>
                    </div>
                </Upload>
            </Form.Item>
            {/*요리 소개*/}
            <Form.Item label='요리 소개'>
                <TextArea
                    rows={4}
                    placeholder='레시피에 대해 간단히 소개해 주세요.'
                    onChange={handleRecipeDescriptionChange}
                />
            </Form.Item>
            {/*요리 분류 대,중,소*/}
            <Form.Item
                label='카테고리'
                style={{
                    display: 'inline-block',
                }}
                name='category'
            >
                <Select
                    placeholder='대분류'
                    style={{
                        marginBottom: '10px',
                    }}
                    onChange={(value) => handleCategoryChange(value, 0)}
                >
                    <Select.Option value='요리'>요리</Select.Option>
                    <Select.Option value='베이킹'>베이킹</Select.Option>
                    <Select.Option value='음료'>음료</Select.Option>
                </Select>
                <Select
                    placeholder='중분류'
                    style={{
                        marginBottom: '10px',
                    }}
                    onChange={(value) => handleCategoryChange(value, 1)}
                >
                    {category &&
                        cate[category[0]] &&
                        cate[category[0]].map((cate, index) => (
                            <Select.Option
                                key={index}
                                value={cate}
                            >
                                {cate}
                            </Select.Option>
                        ))}
                </Select>
            </Form.Item>
            <div>
                {/*요리 인분수*/}
                <Form.Item
                    label='인분'
                    style={{
                        display: 'inline-block',
                        marginRight: '15px',
                    }}
                    name='person'
                >
                    <InputNumber
                        placeholder='인원수'
                        onChange={handlePersonChange}
                    ></InputNumber>
                </Form.Item>
                {/*요리 소요시간*/}
                <Form.Item
                    label='소요시간'
                    style={{
                        display: 'inline-block',
                        marginRight: '15px',
                    }}
                    name='cookingTime'
                >
                    <InputNumber
                        placeholder='분 단위'
                        onChange={handleCookingTimeChange}
                    ></InputNumber>
                </Form.Item>
                {/*요리 난이도*/}
                <Form.Item
                    label='난이도'
                    style={{
                        display: 'inline-block',
                        marginRight: '15px',
                    }}
                    name='difficulty'
                >
                    <Select
                        placeholder='선택'
                        onChange={handleDifficultyChange}
                    >
                        <Select.Option value='high'>상</Select.Option>
                        <Select.Option value='middle'>중</Select.Option>
                        <Select.Option value='low'>하</Select.Option>
                    </Select>
                </Form.Item>
            </div>
        </>
    );
};

export default RecipeData;
