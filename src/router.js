import HomePage from './Page/User/HomePage';
import ProfilePage from './Page/User/ProfilePage';
import MassterLayout from './Page/User/Theme/MassterLayout';
import { ROUTERS } from './Utils/Router';
import { Routes, Route } from 'react-router-dom';

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        }
    ]
    return (
        <MassterLayout>
            <Routes>
                {
                    userRouter.map((item, key) => (<Route key={key} path={item.path} element={item.component} />))
                }
            </Routes>
        </MassterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
}
export default RouterCustom;