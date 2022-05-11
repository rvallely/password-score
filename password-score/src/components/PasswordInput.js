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
              className='row row-cols-lg-auto g-3 align-items-center'
              onSubmit={handleSubmit}>
                <div className='col-12'>
                  <input
                    id='password'
                    className='form-control mt-5'
                    type='password'
                    placeholder='Type your password here ...'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                  </input>
                </div>
                <div className='col-12 text-center'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='visibility'
                    checked={isChecked}
                    onChange={changePasswordVisibility}
                  /> 
                  <label className='form-check-label ms-20' for='visibility'>Show/Hide</label>
                </div>
                <div className='col text-center'>
                  <button className='btn btn-success btn-lg mb 3' type='submit'>GO</button>
                </div>    
            </form>
            <h2 className='display-5 text-center mt-4'>Score is: {score.total} / 15</h2>
            <Tips props={{score, setPassword, setIsChecked, setScore}}/>
            <Links />
        </div>
    )
}

export default PasswordInput;