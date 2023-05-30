import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import {} from '@ant-design/icons';
import { Typography, Image, Divider } from 'antd';

import InsertComment from '../components/insert-comment';
import HowTo from '../components/recipeView/HowTo';
import IngredientList from '../components/recipeView/IngredientList';

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
                <Title level={2}>{recipe.title}</Title>
                <Image
                    width={400}
                    src={''}
                />
                <Divider></Divider>
                <Title level={4}>요리 소개</Title>
                <Paragraph>{recipe.description}</Paragraph>
                <Divider></Divider>
                <Title level={4}>요리 정보</Title>
                <Text style={{ display: 'block' }}>{recipe.category}</Text>
                <Text style={{ display: 'block' }}>{recipe.presons} 인분</Text>
                <Text style={{ display: 'block' }}>조리 시간: {recipe.cookingTime} 분</Text>
                <Text style={{ display: 'block' }}>요리 난이도: {recipe.difficulty}</Text>
                <Divider></Divider>
                <Title level={4}>재료</Title>
                <IngredientList
                    ingredients={recipe.ingredientList ? recipe.ingredientList : recipe.ingredients}
                />
                <Divider></Divider>
                <Title level={4}>조리 순서</Title>
                <HowTo how_to={recipe.how_to_make} />
                <Divider></Divider>
                <InsertComment />
            </AppLayout>
        </>
    );
};

export default RecipeView;
