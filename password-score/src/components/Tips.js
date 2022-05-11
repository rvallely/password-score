const Tips = ({ props }) => {
    console.log('props', props)
    // console.log(typeof setIsChecked)
    console.log(props.score)
    // console.log('score in tips', score)
    if (props.score.total === 0) {
        return <p className='lead text-center'>Enter a password to get your score.</p>
    } else {
        let tips = 'hey';
        if (props.score <= 2) {
            tips = 'Oh no! Your password is too short, try to make passwords at least 12 characters long.';
        }
        else if (props.score === 3) {
            tips = 'Add at least one number and special character.';
        }
        else if (props.score === 4) {
            tips = 'You\'re getting there, just add at least one special character.';
        }
        else if (props.score === 5) {
            tips = 'Great stuff! you\'ve got a number and a special character. If you made your password over 12 characters long, you\'d be even more secure.';
        }
        else if (props.score === 6) {
            tips = 'Almost perfect! Just add a special character.';
        }
        else if (props.score === 7) {
            tips = 'Wow, very secure! According to our rules you\'re pretty safe from hackers.';
        }
        return (
            <div>
                <p
                  className='reset'
                  onClick={() => { 
                    props.setIsChecked(false);
                    props.setPassword('');
                    props.setScore(0);
                  }}
                >
                    Try Again
                </p>
                <p>{tips}</p>

            </div>
            
        )
    }
}

export default Tips;