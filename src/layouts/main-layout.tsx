import React from 'react';
import type { MainLayoutProps } from './main-layout.props';


const MainLayout = (props: MainLayoutProps) => {
    return (
        <div className='container'>
            <div className='header-container'>{props.header}</div>
            <div className='slide-posts-container'>{props.slider}</div>
            <div className='sidebar-container'> {props.sidebar}</div>
            <div className='content-container'> {props.content}</div>
        </div>
    );
};

export default MainLayout;