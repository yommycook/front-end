import React from 'react'; //안 써도 상관 없음! (Next에서는 걍 실행 가능! pages라는 디렉토리를 알아본당)
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import Banner from '../components/Banner';
import CardBoard from '../components/cardboard';
import AddRecipe from '../components/Addrecipe';

const Home = () => {
    const { isLogin, user } = useSelector((state) => state.auth);
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>요미 | 나의 레시피</title>
            </Head>
            <AppLayout>
                <Banner />
                {isLogin && <AddRecipe />}

                <div
                    style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        margin: '30px',
                    }}
                >
                    <CardBoard />
                </div>
                <div
                    style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        margin: '30px',
                    }}
                >
                    <CardBoard />
                </div>
                <div
                    style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        margin: '30px',
                    }}
                >
                    <CardBoard />
                </div>
            </AppLayout>
        </>
    );
};

export default Home;
