import { Link } from 'react-router-dom';

const Redirect = () => {
    return (
        <div>
            <p>Whoops 🙃, looks like this page doesn't exist</p>
            <Link to='/'>Back to home page</Link>
        </div>
    ) 
}

export default Redirect;