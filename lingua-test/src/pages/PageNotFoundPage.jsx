import { Link } from "react-router-dom"

export default function PageNotFoundPage () {
    return (
        <div>
            <h1>Error 404: Page Not Found</h1>
            <Link className='btn' to='/login'>Return to the Home Page</Link>
        </div>
    )
}