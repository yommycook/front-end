import React, { useState, useEffect } from 'react'; //안 써도 상관 없음! (Next에서는 걍 실행 가능! pages라는 디렉토리를 알아본당)

import { Button, Divider } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import Banner from '../components/Banner';
import CardBoard from '../components/Cardboard';
import AddRecipe from '../components/Addrecipe';

import { getAllRecipes } from '../service/dbService';

const Home = () => {
    const [data, setData] = useState([]);
    const [myrecipe, setMyrecipe] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isLogin, user } = useSelector((state) => state.auth);
    const getRecipeData = async () => {
        try {
            const recipes = await getAllRecipes();
            setLoading(false);
            setData(recipes);
        } catch (error) {
            console.log(error);
        }
    };
    const getMyRecipeData = async (id) => {
        try {
            const recipes = await getAllRecipes(id);
            setLoading(false);
            setMyrecipe(recipes);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getRecipeData();
        if (isLogin) {
            getMyRecipeData(user.uid);
            console.log(getAllRecipes(user.uid));
        }
    }, [isLogin]);

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
                            <Link href='/recipe-register'>
                                <Button
                                    icon={<PlusCircleOutlined />}
                                    type='dashed'
                                    size='large'
                                    block
                                >
                                    새로운 레시피 등록
                                </Button>
                            </Link>
                        </div>
                    </>
                )}
                {!loading && (
                    <>
                        {isLogin && (
                            <div
                                style={{
                                    display: 'inline-block',
                                    verticalAlign: 'middle',
                                    margin: '30px',
                                }}
                            >
                                내 레시피
                                <Divider />
                                <CardBoard data={myrecipe} />
                            </div>
                        )}

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
