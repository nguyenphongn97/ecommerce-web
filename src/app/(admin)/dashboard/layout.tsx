import React from "react";
import { Layout } from 'antd';
import AdminFooterBar from '@/components/layout/admin.footer';
import AdminHeaderBar from '@/components/layout/admin.header';
import AdminSideBar from '@/components/layout/admin.sidebar';
import AdminContent from "@/components/layout/admin.content";

const AdminLayout = ({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <Layout>
        <AdminSideBar/>
        <Layout>
            <AdminHeaderBar/>
                <AdminContent>
                    {children}
                </AdminContent>
            <AdminFooterBar/>
        </Layout>
    </Layout>
    )
}

export default AdminLayout