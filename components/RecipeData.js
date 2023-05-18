import React, { useState } from 'react';

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

const RecipeData = ({ setRecipeData }) => {
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
    // 요리 대분류 변경
    const handleCategoryChange = (value) => {
        setRecipeData((prevData) => ({
            ...prevData,
            category: value,
        }));
    };
    // 요리 중분류 변경
    const handleSubCategoryChange = (value) => {
        setRecipeData((prevData) => ({
            ...prevData,
            SsubCategory: value,
        }));
    };
    // 요리 소분류 변경
    const handleSubSubCategoryChange = (value) => {
        setRecipeData((prevData) => ({
            ...prevData,
            subSubCategory: value,
        }));
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
            picture: fileList.length > 0 ? fileList[0] : null,
        }));
    };

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
                    onChange={handleCategoryChange}
                >
                    <Select.Option value='demo'>Demo</Select.Option>
                </Select>
                <Select
                    placeholder='중분류'
                    style={{
                        marginBottom: '10px',
                    }}
                    onChange={handleSubCategoryChange}
                >
                    <Select.Option value='demo'>Demo</Select.Option>
                </Select>
                <Select
                    placeholder='소분류'
                    style={{
                        marginBottom: '10px',
                    }}
                    onChange={handleSubSubCategoryChange}
                >
                    <Select.Option value='demo'>Demo</Select.Option>
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
