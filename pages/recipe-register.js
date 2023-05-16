import React, { useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Button, Form, Typography, Divider } from 'antd';
import RecipeData from '../components/recipe-data';
import IngredientsData from '../components/ingredients-data';
import CookStep from '../components/cook-step';

const { Title } = Typography;

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
                        <RecipeData />
                        <Divider></Divider>
                        <IngredientsData />
                        <Divider></Divider>
                        <CookStep />
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
