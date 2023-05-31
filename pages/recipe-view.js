import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { ImportOutlined } from '@ant-design/icons';
import { Typography, Image, Divider, Space, Row, Col, Avatar, Button } from 'antd';

import Comment from '../components/Comment';
import HowTo from '../components/recipeView/HowTo';
import IngredientList from '../components/recipeView/IngredientList';
import RateStar from '../components/RateStar';
import Writer from '../components/Writer';

const { Title, Paragraph, Text } = Typography;

const RecipeView = () => {
    const { recipe } = useSelector((state) => state.recipe);
    console.log(recipe);
    return (
        <>
            <Head>
                <title>레시피|요미</title>
            </Head>
            <AppLayout>
                <Row
                    type='flex'
                    align='center'
                >
                    <Col>
                        <Space
                            align='center'
                            style={{ marginTop: '30px' }}
                        >
                            <Image
                                width={400}
                                src={''}
                            />
                        </Space>
                    </Col>
                </Row>
                <Title
                    align='center'
                    level={2}
                >
                    {recipe.title}
                </Title>
                <Paragraph align='center'>{recipe.description}</Paragraph>
                <Divider></Divider>
                <div>
                    <Title
                        style={{ paddingLeft: '60px' }}
                        level={3}
                    >
                        요리 정보
                    </Title>
                    <div style={{ paddingLeft: '60px' }}>
                        <Text style={{ display: 'block' }}> {recipe.category} </Text>
                        <Text style={{ display: 'block' }}>{recipe.presons} 인분</Text>
                        <Text style={{ display: 'block' }}>조리 시간: {recipe.cookingTime} 분</Text>
                        <Text style={{ display: 'block' }}>요리 난이도: {recipe.difficulty}</Text>
                    </div>
                </div>
                <Divider></Divider>
                <Title level={4}>재료</Title>
                <IngredientList
                    ingredients={recipe.ingredientList ? recipe.ingredientList : recipe.ingredients}
                />
                <Divider></Divider>
                <Title level={4}>조리 순서</Title>
                <HowTo how_to={recipe.how_to_make} />
                <Divider></Divider>
                <div>
                    <Comment></Comment>
                </div>
                <div style={{ padding: '80px' }}></div>
            </AppLayout>
        </>
    );
};

export default RecipeView;
