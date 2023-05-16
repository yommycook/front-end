import React from 'react';
import Link from 'next/link';

import { Button, Space, Typography } from 'antd';
const { Title } = Typography;

const AddRecipe = () => (
    <Space wrap>
        <Button
            type='link'
            href='/recipe-register'
        >
            새로운 레시피 등록
        </Button>
    </Space>
);
export default AddRecipe;
