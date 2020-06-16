import React from 'react';
import styled from 'styled-components';
import img from '../images/images/jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg';

function HomeHeader({img, children}) {
    return (
        <IndexHeader img={img}>
        {children}
        </IndexHeader>
    )
}
function PageHeader({img, children}) {
    return (
        <DefaultHeader img={img}>
        {children}
        </DefaultHeader>
    )
}

const IndexHeader = styled.header`
    min-height: calc(100vh - 68px);
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${props => props.img}) center/cover fixed no-repeat;
    display: flex;
    justify-content: center;
    align-items:center;    
`
HomeHeader.defaultProps = {
    img: img,
}
PageHeader.defaultProps = {
    img: img,
}

const DefaultHeader = styled(IndexHeader)`
min-height: 60vh;
`

export { HomeHeader, PageHeader };
