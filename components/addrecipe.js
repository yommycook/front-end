import React from 'react';
import Link from 'next/link';

import { Card, List, Typography } from 'antd';
const { Title } = Typography;

const AddRecipe = () => (
    <>
        <Link href='/recipe-register'>새로운 레시피 등록</Link>
        <Link href='/virture-id'>가상 api 연습</Link>
    </>
);
export default AddRecipe;
