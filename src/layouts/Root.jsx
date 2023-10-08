import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto font-poppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;