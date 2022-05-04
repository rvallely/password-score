const ScoreRules = () => {
    return (
      <div>
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
      </div>)

}

export default ScoreRules;