import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withRouter = (component: () => JSX.Element) => () =>
    (
        <BrowserRouter>
            <Suspense
                fallback={
                    <div style={{height: '100vh', display: 'flex', alignItems: 'center'}}>
                        <p>Loading...</p>
                    </div>
                }
            >
                {component()}
            </Suspense>
        </BrowserRouter>
    )