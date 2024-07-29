import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import Post from "./Post"
import Update from './Put'
import Delete from './Delete'
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
    const [selectKey, setSelectKey] = useState("1");

    const handleMenuClick = (e) => {
        setSelectKey(e.key);
    };

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: 'grey' }}>
                <img src="./public/AkhiraLogo.png" style={{ height: '40px' }} alt="Logo" />
            </Header>
            <Layout>
                <Sider>
                    <Menu
                        onClick={handleMenuClick}
                        selectedKeys={[selectKey]}
                        items={[
                            { label: "Dashboard", key: "1" },
                            { label: "About", key: "2" }
                        ]}
                    />
                </Sider>
                <Content >
                    {
                        selectKey === '1' &&
                        <div style={{ textAlign: 'center' }}>
                            <Post />
                        </div>
                    }
                    {
                        selectKey === '2' &&
                        <div style={{ textAlign: 'center' }}>
                            <h1>
                                Welcome to the About Page
                            </h1>
                        </div>
                    }
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
