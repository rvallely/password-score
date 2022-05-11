import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
<button class='btn btn-primary' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
⇤⇥
</button>

<div className='offcanvas offcanvas-start' tabindex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel' style={{border: 'solid red', maxWidth: '80%'}}>
  <div className='offcanvas-header'>
    <h5 className='offcanvas-title mb-0' id='offcanvasExampleLabel'>Useful Links</h5>
    <button type='button' className='btn-close text-reset' data-bs-dismiss='offcanvas' aria-label='Close'></button>
  </div>
  <div className='offcanvas-body'>
    <a href='https://blog.avast.com/strong-password-ideas' target='_blank' className='m-1 text-decoration-none fw-bold' style={{color: '#93CDF7'}}>How to create a strong password.</a>
    <br></br>
    <a href='https://www.tomsguide.com/uk/news/worst-passwords-2022' target='_blank' className='m-1 text-decoration-none fw-bold' style={{color: '#93CDF7'}}>Worst passwords of 2022.</a>
    <br></br>
    <Link to='/how-we-score' className='m-1 text-decoration-none fw-bold' style={{color: '#93CDF7'}}>How we score passwords.</Link>
  </div>
</div>
</div>
    )
}

export default Nav;