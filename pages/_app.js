import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import 'antd/dist/reset.css';

import { Typography, Input, Avatar, Button } from 'antd';

import { FirebaseService } from '../src/service/services';

const { Title } = Typography;

const FireBaseAuth = new FirebaseService();

const App = ({ Component }) => {
    const [isLogin, setLogin] = useState(false);
    const onGoogleLogin = async () => {
        const info = await FireBaseAuth.onLogin();
        if (info) {
            const {
                user: { uid, email, photoURL },
            } = info;
            console.log('Login.jsx: ', uid);
            setLogin({
                state: true,
                user: {
                    uid,
                    email,
                    profile: photoURL,
                },
            });
        }
    };
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>요미</title>
            </Head>
            <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <Title>요미</Title>
            </div>
            <div
                style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginLeft: '80px',
                    marginRight: '40px',
                }}
            >
                <Input.Search />
            </div>
            {isLogin ? (
                <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <Avatar
                        style={{ backgroundColor: 'slateblue', verticalAlign: 'middle' }}
                        size='large'
                    >
                        지니
                    </Avatar>
                    <Button
                        size='small'
                        style={{ margin: '0 16px', verticalAlign: 'middle' }}
                    >
                        로그아웃
                    </Button>
                </div>
            ) : (
                <Button
                    size='small'
                    style={{ margin: '0 16px', verticalAlign: 'middle' }}
                    onClick={onGoogleLogin}
                >
                    로그인
                </Button>
            )}
            <Component />
        </>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default App;
