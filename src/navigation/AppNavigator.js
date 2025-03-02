import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Loader from "../components/Loader"

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Automation = lazy(() => import('../pages/Automation'));
const Datatization = lazy(() => import('../pages/Datatization'));
const Terms = lazy(() => import('../pages/policy/Terms'));
const Privacy = lazy(() => import('../pages/policy/Privacy'));
const Cookies = lazy(() => import('../pages/policy/Cookies'));
const Artificial = lazy(() => import('../pages/Artificial'));
const Engergy = lazy(() => import('../pages/automation/Energy'));
const Manufacturing = lazy(() => import('../pages/automation/Manufacturing'));
const Transport = lazy(() => import('../pages/automation/Transport'));
const Enterprises = lazy(() => import('../pages/Enterprises'));
const Digitalization = lazy(() => import('../pages/Digitalization'));


function AppNavigator() {

    // if(true) {
    //   return <Loader />
    // }

    return (
        <Router>
            <Routes>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <Home/>
                    </Suspense>
                } path="/"/>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <About/>
                    </Suspense>
                } path="/about"/>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <Contact/>
                    </Suspense>
                } path="/contact"/>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <Automation/>
                    </Suspense>
                } path="/automation"/>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <Datatization/>
                    </Suspense>
                } path="/datatization"/>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <Digitalization/>
                    </Suspense>
                } path="/digitalization"/>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <Artificial/>
                    </Suspense>
                } path="/artificial"/>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <Engergy/>
                    </Suspense>
                } path="/engergy"/>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <Manufacturing/>
                    </Suspense>
                } path="/manufacturing"/>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <Transport/>
                    </Suspense>
                } path="/transport"/>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <Enterprises/>
                    </Suspense>
                } path="/enterprises"/>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <Terms/>
                    </Suspense>
                } path="/terms"/>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <Privacy/>
                    </Suspense>
                } path="/privacy"/>
                <Route element={
                    <Suspense fallback={<Loader/>}>
                        <Cookies/>
                    </Suspense>
                } path="/cookies"/>
            </Routes>
        </Router>
    )
}

export default AppNavigator;
