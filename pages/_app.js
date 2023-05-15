import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { Typography, Input, Avatar, Button } from 'antd';

import { FirebaseService } from '../service/services';
import { Link } from 'react-router-dom';

const { Title } = Typography;
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '../store/slices/authSlice';

const FireBaseAuth = new FirebaseService();

const App = ({ Component }) => {
    const dispatch = useDispatch();
    const { isLogin, user } = useSelector((state) => state.auth);

    const onGoogleLogin = async () => {
        const info = await FireBaseAuth.onLogin();
        if (info) {
            const {
                user: { uid, email, photoURL },
            } = info;
            dispatch(loginSuccess({ uid, email, profile: photoURL }));
        }
    };

    const onSignOut = async () => {
        const signOut = await FireBaseAuth.signOut();
        if (signOut) dispatch(logout());
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
