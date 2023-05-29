import React from 'react';
import Link from 'next/link';

import { Button, Space, Typography, Row, Col } from 'antd';
const { Title } = Typography;

const AddRecipe = () => (
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
);
export default AddRecipe;
