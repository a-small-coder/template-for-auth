import {render, screen} from '@testing-library/react'
import App from '../App'
test( 'first loading', () => {
    render(
        <App/>
    )
    const loginEdle = screen.getByText(/Loading.../i)
    expect(loginEdle).toBeInTheDocument()
}
)