'use client'
import { Layout } from 'antd';

const AdminFooterBar = () => {
    const { Footer } = Layout;
    return (
        <Footer style={{ textAlign: 'center' }}>
                    Ecommerce ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
    )
}

export default AdminFooterBar