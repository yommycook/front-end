import React, { useState, useEffect } from 'react'; //안 써도 상관 없음! (Next에서는 걍 실행 가능! pages라는 디렉토리를 알아본당)

import { Button, Divider } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import Banner from '../components/Banner';
import CardBoard from '../components/Cardboard';
import AddRecipe from '../components/Addrecipe';

import { getAllRecipes } from '../service/dbService';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const getRecipeData = async () => {
        try {
            const recipes = await getAllRecipes();
            setLoading(false);
            setData(recipes);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getRecipeData();
    }, []);
    const { isLogin, user } = useSelector((state) => state.auth);
    console.log('index', data);
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>요미 | 나의 레시피</title>
            </Head>
            <AppLayout>
                <Banner />
                {isLogin && (
                    <>
                        <div style={{ height: '20px' }}></div>
                        <div
                            style={{
                                display: 'flex',
                                margin: 'auto',
                                maxWidth: '400px',
                            }}
                        >
                            <Button
                                icon={<PlusCircleOutlined />}
                                type='dashed'
                                href='/recipe-register'
                                size='large'
                                block
                            >
                                새로운 레시피 등록
                            </Button>
                        </div>
                    </>
                )}
                {!loading && (
                    <>
                        <div
                            style={{
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                margin: '30px',
                            }}
                        >
                            <Divider />
                            <CardBoard data={data} />
                        </div>
                        <div
                            style={{
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                margin: '30px',
                            }}
                        >
                            <Divider />
                            <CardBoard data={data} />
                        </div>
                        <div
                            style={{
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                margin: '30px',
                            }}
                        >
                            <Divider />
                            <CardBoard data={data} />
                        </div>
                    </>
                )}
            </AppLayout>
        </>
    );
};

export default Home;
