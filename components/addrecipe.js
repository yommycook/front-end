import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Space, Typography } from 'antd';

import { onGoogleLogin, onSignOut } from '../service/googleAuth';

const { Title } = Typography;

const AddRecipe = () => {
    const dispatch = useDispatch();
    const { isLogin, user } = useSelector((state) => state.auth);

    return (
        <>
            <Space wrap>
                {isLogin ? (
                    <Link href='/recipe-register'>
                        <a>
                            <Button type='link'>새로운 레시피 등록</Button>
                        </a>
                    </Link>
                ) : (
                    <Button onClick={() => onGoogleLogin(dispatch)}>새로운 레시피 등록</Button>
                )}
            </Space>
        </>
    );
};
export default AddRecipe;
