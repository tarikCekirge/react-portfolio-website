import ScreenLoading from '@/components/common/ScreenLoading';
import MainLayout from '@/components/layout/MainLayout';
import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom';


const HomePage = lazy(() => import('@/pages/HomePage '));

const Loading = () => <ScreenLoading />;

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default AppRoutes 
