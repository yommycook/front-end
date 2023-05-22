import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, Form, Typography, Divider } from 'antd';

import AppLayout from '../components/AppLayout';
import RecipeData from '../components/RecipeData';
import IngredientsData from '../components/IngredientsData';
import CookStep from '../components/CookStep';

const { Title } = Typography;

const RecipeRegister = () => {
    const [recipeData, setRecipeData] = useState(null);
    const router = useRouter();
    const { isLogin, user } = useSelector((state) => state.auth);
    if (!isLogin) {
        router.push('/');
    }
    // 레시피 등록 버튼 클릭 시 처리할 함수
    const handleRecipeSubmit = () => {
        setRecipeData((prevData) => ({
            ...prevData,
            owner: user.uid,
        }));
        // recipeData를 사용하여 필요한 처리를 수행
        //이미지 디비저장로직 디비 주소 받기
        console.log(recipeData);
    };
    return (
        <>
            <Head>
                <title>레시피 작성|요미</title>
            </Head>
            <AppLayout>
                <div>
                    <Title level={3}>레시피 작성하기</Title>
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
                            {/* <Link href='/recipe-view'> */}
                            <a>
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                >
                                    레시피 등록
                                </Button>
                            </a>
                            {/* </Link> */}
                        </Form.Item>
                    </Form>
                </div>
            </AppLayout>
        </>
    );
};

export default RecipeRegister;
