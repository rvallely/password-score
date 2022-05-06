import { React, useState } from 'react';
import { getScore } from '../backend/password-score/password-score';
import Tips from './Tips';
import Links from './Links';

const PasswordInput = () => {
    const [password, setPassword] = useState('');
    const [score, setScore] = useState({total: 0});
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userScore = getScore(password);
        setScore(userScore)
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
        <div className='container'>
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
                <button type='submit'>GO</button>
            </form>
            <h2>Score is: {score.total} / 15</h2>
            <Tips props={{score, setPassword, setIsChecked, setScore}}/>
            <Links />
        </div>
    )
}

export default PasswordInput;