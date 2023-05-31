import React, { useState, useEffect } from 'react';

import AppLayout from '../components/AppLayout';
import Head from 'next/head';

import { Select, Title, TextArea, Space, Input } from 'antd';

import ConvertedUnit from '../components/ConvertedUnit';

const options = [
    {
        value: '밀가루',
        label: '밀가루',
    },
    {
        value: '물',
        label: '물',
    },
];
const units = [
    {
        value: '종이컵',
        label: '종이컵',
    },
    {
        value: '큰술',
        label: '큰 술',
    },
    {
        value: '작은술',
        label: '작은 술',
    },
    {
        value: '소수잔',
        label: '소주잔',
    },
    {
        value: 'L',
        label: 'L(리터)',
    },
    {
        value: 'mL',
        label: 'mL(밀리리터)',
    },
    {
        value: 'cc',
        label: 'cc(시시)',
    },
    {
        value: 'g',
        label: 'g(그램)',
    },
    {
        value: 'mg',
        label: 'mg(밀리그램)',
    },
    {
        value: 'kg',
        label: 'kg(키로그램)',
    },
    {
        value: 'lb',
        label: 'lb(파운드)',
    },
    {
        value: 'gal',
        label: 'gal(갤런)',
    },
    {
        value: 'oz',
        label: 'oz(온즈)',
    },
];

const Measure = () => {
    const [value, setValue] = useState(0);
    const [option, setOption] = useState(options[0].value);
    const [unit, setUnit] = useState(units[0].value);
    const changeValue = (e) => {
        setValue(e);
    };
    const changeOption = (option) => {
        setOption(option);
    };
    const changeUnit = (unit) => {
        setUnit(unit);
    };
    return (
        <>
            <Head>
                <title>마이페이지|요미</title>
            </Head>
            <AppLayout>
                <div>계량</div>
                <div>
                    <Space.Compact>
                        <Select
                            defaultValue='밀가루'
                            options={options}
                            onChange={(option) => changeOption(option)}
                        />
                        <Input
                            placeholder='용량을 입력하세요'
                            onChange={(e) => changeValue(e.target.value)}
                        />
                        <Select
                            defaultValue='종이컵'
                            options={units}
                            onChange={(unit) => changeUnit(unit)}
                        />
                    </Space.Compact>
                    <ConvertedUnit
                        option={option}
                        value={value}
                        unit={unit}
                    />
                </div>
            </AppLayout>
        </>
    );
};

export default Measure;
