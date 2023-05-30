import React from 'react';

import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import Catalog from '../components/Catalog';

const Profile = () => {
    return (
        <>
            <Head>
                <title>분류|요미</title>
            </Head>
            <AppLayout>
                <Catalog>
                    <div style={{ margin: '30px' }}>
                        <Catalog></Catalog>
                    </div>
                </Catalog>
            </AppLayout>
        </>
    );
};

export default Profile;
