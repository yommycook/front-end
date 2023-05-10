import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import 'antd/dist/reset.css';

import { Typography, Input, Avatar, Button } from 'antd';

import { FirebaseService } from '../service/services';

const { Title } = Typography;

const FireBaseAuth = new FirebaseService();

const App = ({ Component }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null);

    const onGoogleLogin = async () => {
        const info = await FireBaseAuth.onLogin();
        if (info) {
            const {
                user: { uid, email, photoURL },
            } = info;
            setIsLogin(true);
            setUser({ uid, email, profile: photoURL });
        }
    };

    const onSignOut = async () => {
        const signOut = await FireBaseAuth.signOut();
        if (signOut) setIsLogin(false);
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
                        src={user.profile}
                        style={{ backgroundColor: 'slateblue', verticalAlign: 'middle' }}
                        size='large'
                    ></Avatar>
                    <Button
                        size='small'
                        style={{ margin: '0 16px', verticalAlign: 'middle' }}
                        onClick={onSignOut}
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
