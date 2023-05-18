import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import PropTypes from 'prop-types';
import Head from 'next/head';

import { Typography, Input, Avatar, Button } from 'antd';

import store from '../store/store';
import { onGoogleLogin, onSignOut } from '../service/googleAuth';

const { Title } = Typography;

const App = ({ Component }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { isLogin, user } = useSelector((state) => state.auth);
    const [clicked, setClicked] = useState(false);

    const handleGoogleLogin = () => {
        if (!clicked && !user) {
            setClicked(true);
            onGoogleLogin(dispatch);
        }
    };

    const handleSignOut = () => {
        setClicked(false);
        onSignOut(dispatch);
        router.push('/');
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
                        onClick={handleSignOut}
                    >
                        로그아웃
                    </Button>
                </div>
            ) : (
                <Button
                    size='small'
                    style={{ margin: '0 16px', verticalAlign: 'middle' }}
                    onClick={handleGoogleLogin}
                    disabled={clicked}
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

export default function AppWithStore({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <App
                Component={Component}
                {...pageProps}
            />
        </Provider>
    );
}

AppWithStore.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
