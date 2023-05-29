import React from 'react'; //안 써도 상관 없음! (Next에서는 걍 실행 가능! pages라는 디렉토리를 알아본당)

import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import Add from '../components/add';
import CardBoard from '../components/cardboard';
import AddRecipe from '../components/addrecipe';

const Home = () => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>요미 | 나의 레시피</title>
            </Head>
            <AppLayout>
                <Add />
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
