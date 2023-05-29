import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    margin: 0,
    height: '260px',
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#F0965B',
};
const Add = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
            <div>
                <h3 style={contentStyle}>공지 1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>공지 2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>공지 3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>공지 4</h3>
            </div>
        </Carousel>
    );
};
export default Add;
