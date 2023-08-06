import React from 'react';
import {Route, Routes} from 'react-router-dom'
import LoginPage from './LoginPage';
import SearchHome from './SearchHome';
import UploadResume from './UploadResume';
import ProfilePage from './ProfilePage';
import ErrorBoundry from './ErrorBoundry'

const NavigationRoutes = () => {

    return (
        <Routes>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            <Route path='/SearchHome' element={<SearchHome/>}/>
            <Route path='/UploadResume' element={<UploadResume/>}/>
            <Route path='/ProfilePage' element={<ProfilePage/>}/>
            <Route path='*' element={<ErrorBoundry/>}/>
        </Routes>
    )
}

export default NavigationRoutes;