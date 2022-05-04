import { React, useState } from 'react';
import { getScore } from '../backend/password-score/password-score';
import Tips from './Tips';
import Links from './Links';

const PasswordInput = () => {
    const [password, setPassword] = useState('');
    const [score, setScore] = useState(0);
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitting', password)
        const userScore = getScore(password);
        console.log(userScore);
        setScore(userScore)
        // send pass to be scored
        // reveal score 
        
    }

    const changePasswordVisibility = () => {
        var x = document.getElementById('password');
        if (x.type === 'password') {
          x.type = 'text';
        } else {
          x.type = 'password';
        }
        setIsChecked(!isChecked);
    };
    return (
        <div>
            <form 
              className='form'
              onSubmit={handleSubmit}>
                <input
                  id='password'
                  type='password'
                  placeholder='Type your password here ...'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}>
                </input>
                <input
                  type='checkbox'
                  id='visibility'
                  checked={isChecked}
                  onChange={changePasswordVisibility}
                /> 
                {/* {console.log('pass >>> ', password)} */}
                <button type='submit'>GO</button>
            </form>
            <h2>Score is: {score} / 7</h2>
            <Tips props={{score, setPassword, setIsChecked, setScore}}/>
            <Links />
        </div>
    )
}

export default PasswordInput;