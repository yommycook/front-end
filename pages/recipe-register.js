import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, Form, Typography, Divider } from 'antd';

import AppLayout from '../components/AppLayout';
import { CheckOutlined } from '@ant-design/icons';
import RecipeData from '../components/RecipeData';
import IngredientsData from '../components/IngredientsData';
import CookStep from '../components/CookStep';

import { createRecipe, createRecipe_test } from '../service/dbService';

const { Title } = Typography;

const RecipeRegister = () => {
    const [recipeData, setRecipeData] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { isLogin, user } = useSelector((state) => state.auth);
    if (!isLogin) {
        router.push('/');
    }

    const convertRecipeData = (recipeData) => {
        const newRecipe = { ...recipeData };
        const convertHow_to_make = newRecipe.how_to_make.map((obj, index) => {
            console.log(obj);
            return {
                step: index + 1,
                cook_image: obj.cook_image[0].originFileObj,
                description: obj.description,
            };
        });
        newRecipe = {
            ...newRecipe,
            how_to_make: convertHow_to_make,
        };
        return newRecipe;
    };

    // 레시피 등록 버튼 클릭 시 처리할 함수
    const handleRecipeSubmit = async () => {
        setRecipeData((prevData) => ({
            ...prevData,
            owner: user.uid,
        }));

        const convertData = await convertRecipeData(recipeData);
        createRecipe(convertData);
    };
    return (
        <>
            <Head>
                <title>레시피 작성|요미</title>
            </Head>
            <AppLayout>
                <div style={{ marginLeft: '100px', marginBottom: '80px', alignItems: 'center' }}>
                    <Title
                        level={3}
                        style={{ marginBottom: '40px' }}
                    >
                        레시피 작성하기
                    </Title>
                    <Form
                        style={{ maxWidth: 600 }}
                        onFinish={handleRecipeSubmit}
                    >
                        <RecipeData setRecipeData={setRecipeData} />
                        <Divider></Divider>
                        <IngredientsData setRecipeData={setRecipeData} />
                        <Divider></Divider>
                        <CookStep setRecipeData={setRecipeData} />
                        <Divider></Divider>
                        <Form.Item>
                            <div style={{ maxWidth: '200px', margin: 'auto' }}>
                                {/* <Link href='/recipe-view'> */}
                                <Button
                                    icon={<CheckOutlined />}
                                    block
                                    type='primary'
                                    htmlType='submit'
                                    size='large'
                                >
                                    레시피 등록
                                </Button>
                            </div>
                            {/* </Link> */}
                        </Form.Item>
                    </Form>
                </div>
            </AppLayout>
        </>
    );
};

export default RecipeRegister;
