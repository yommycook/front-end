import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { Button, Space, Typography, Row, Col } from 'antd';

import { onGoogleLogin, onSignOut } from '../service/googleAuth';

const { Title } = Typography;

const AddRecipe = () => {
    const dispatch = useDispatch();
    const { isLogin, user } = useSelector((state) => state.auth);
    return (
        <>
            {isLogin ? (
                <Row gutter={24}>
                    <Col span={24}>
                        <div style={{ backgroundColor: 'purple' }}>
                            <Button
                                block
                                type='dashed'
                                href='/recipe-register'
                            >
                                새로운 레시피 등록
                            </Button>
                        </div>
                    </Col>
                </Row>
            ) : (
                <Button onClick={() => onGoogleLogin(dispatch)}>새로운 레시피 등록</Button>
            )}
        </>
    );
};

export default AddRecipe;
