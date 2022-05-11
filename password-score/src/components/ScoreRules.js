import { Link } from 'react-router-dom';

const ScoreRules = () => {
  //style={{fontSize: '30px'}}
    return (
      <div>
        <Link className='btn btn-success text-right position-absolute top-0 end-0 m-0 py-0' to='/' style={{fontSize: '23px'}}>⌂</Link>
        <div className='mt-5 text-center'>
          {/* <button className='btn text-right position-absolute top-0 end-0' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>

</button> */}
{/* <Link className='btn btn-primary text-right position-absolute top-0 end-0 m-0 py-0' to='/' style={{fontSize: '30px'}}>⌂</Link> */}
{/* <button class='btn btn-primary' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
⇤⇥
</button> */}
          <h2>How We Score</h2>
          <p>
              Everyone starts with 0. The maximum score is 7.
              <br></br>
              <br></br>
              Step One: 
              <br></br>
                If length is between 1 and 3 inclusive, your score is 1.
                <br></br>
                If length is between 4 and 8 inclusive, your score is 2.
                <br></br>
                If length is between 9 and 12 inclusive, 2 is added to your score.
                <br></br>
                If length is over 12, 4 is added to your score.
              <br></br>
              <br></br>
              Step Two:
              <br></br>
                If your password has at least 1 letter 1 is added to your score.
                <br></br>
                If your password has at least 1 number 1 is added to your score.
                <br></br>
                If your password has at least 1 special character (! @ £ # $ % ^ & *) 1 is added to your score.
                <br></br>
              Examples:
              <br></br>
              <br></br>
              bob = 1 / 7	
              <br></br>
              bobbybob = 2 / 7
              <br></br>
              bobbobbob = 3 / 7
              <br></br>
              bobbobbob1 = 4 / 7
              <br></br>
              bobbob1#2$ = 5 / 7
              <br></br>
              bobbobbobbob123 = 6 / 7
              <br></br>
              bobbobbob1!2@3# = 7 / 7
          </p>
      </div>
      </div>
      
    )

}

export default ScoreRules;