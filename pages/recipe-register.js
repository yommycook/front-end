import React, { useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Button, Form, Typography, Divider } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
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
                <div style={{ marginLeft: '100px', marginBottom: '80px', alignItems: 'center' }}>
                    <Title
                        level={3}
                        style={{ marginBottom: '40px' }}
                    >
                        레시피 작성하기
                    </Title>
                    <Form style={{ maxWidth: 600 }}>
                        <RecipeData />
                        <Divider></Divider>
                        <IngredientsData />
                        <Divider></Divider>
                        <CookStep />
                        <Divider></Divider>
                        <Form.Item>
                            <div style={{ maxWidth: '200px', margin: 'auto' }}>
                                <Button
                                    icon={<CheckOutlined />}
                                    block
                                    type='primary'
                                    htmlType='submit'
                                    href='/recipe-view'
                                    size='large'
                                >
                                    레시피 등록
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </AppLayout>
        </>
    );
};

export default RecipeRegister;
