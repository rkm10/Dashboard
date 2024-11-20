import React, { lazy } from 'react'
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Sidebar from './sidebar/Sidebar';
// const Error = lazy(() => import('../views/notFound/Error'))

export default function FullLayout() {
    return (
        <>
            <ErrorBoundary >
                <Sidebar Children={Outlet} />
            </ErrorBoundary>
        </>
    )
}
