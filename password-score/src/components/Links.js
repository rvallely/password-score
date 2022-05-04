import { Link } from 'react-router-dom'

const Links = () => {
    return (
        <div>
            <a href='https://blog.avast.com/strong-password-ideas' target='_blank'>How to create a strong password.</a>
            <a href='https://www.tomsguide.com/uk/news/worst-passwords-2022' target='_blank'>Worst passwords of 2022.</a>
            <Link to='/how-we-score' >How we score passwords.</Link>
        </div>
    )
}

export default Links;