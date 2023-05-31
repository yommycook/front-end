import React, { useEffect, useState } from 'react';
import { Typography, Descriptions } from 'antd';

const { Text } = Typography;

const identifyCategory = (option) => {
    switch (option) {
        case '물':
            return 'fluid';
        case '밀가루':
            return 'powder';
        default:
            return 'etc';
    }
};

const mappingLabel = {
    종이컵: '종이컵',
    큰술: '큰 술',
    작은술: '작은 술',
    소주잔: '소주잔',
    L: '리터(L)',
    mL: '밀리리터(mL)',
    cc: '시시(cc)',
    g: '그램(g)',
    mg: '밀리그램(mg)',
    kg: '키로그램(kg)',
    lb: '파운드(lb)',
    gal: '갤런(gal)',
    oz: '온즈(oz)',
};

const mappingUnit = {
    종이컵: ' 컵',
    큰술: ' 큰 술',
    작은술: ' 작은 술',
    소주잔: ' 컵',
    L: ' L',
    mL: ' mL',
    cc: ' cc',
    g: ' g',
    mg: ' mg',
    kg: ' kg',
    lb: ' lb',
    gal: ' gal',
    oz: ' oz',
};

const categories = {
    물: {
        종이컵: 240,
        큰술: 15,
        작은술: 5,
        소주잔: 44,
        L: 1000,
        mL: 1,
        cc: 1,
        g: 1,
        mg: 0.001,
        kg: 1000,
        lb: 453.592,
        gal: 3785.41,
        oz: 29.5735,
    },
    밀가루: {
        종이컵: 125,
        큰술: 7.8125,
        작은술: 2.6041667,
        소주잔: 30,
        L: 958,
        mL: 0.958,
        cc: 0.958,
        g: 1,
        mg: 0.001,
        kg: 1000,
        lb: 453.592,
        oz: 28.3495,
    },
};

function convertAll(material, value, from) {
    const results = {};
    const conversionTable = categories[material];
    if (!conversionTable) {
        throw new Error(`변환 테이블을 찾을 수 없습니다: ${material}`);
    }

    const baseValue = value * conversionTable[from];

    for (const [unit, conversionRate] of Object.entries(conversionTable)) {
        results[unit] = baseValue / conversionRate;
    }

    return results;
}

const ConvertedUnit = ({ option, value, unit }) => {
    const [viewUnit, setViewUnit] = useState({});

    const category = identifyCategory(option);

    useEffect(() => {
        setViewUnit(convertAll(option, value, unit));
        console.log(viewUnit);
    }, [option, value, unit]);

    return (
        <Descriptions title='변환된 계량정보'>
            {Object.entries(viewUnit).map(([key, value]) => (
                <Descriptions.Item label={mappingLabel[key]}>
                    {isNaN(value) ? 'N/A' : value.toFixed(2)}
                    {mappingUnit[key]}
                </Descriptions.Item>
            ))}
        </Descriptions>
    );
};

export default ConvertedUnit;
