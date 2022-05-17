const Tips = ({ props }) => {
    // console.log('props', props)
    // console.log(typeof setIsChecked)
    // console.log(props.score)
    // console.log('score in tips', score)
    if (props.score.total === 0) {
        return <p className='lead text-center'>Enter a password to get your score.</p>
    } else {
        console.log(props.score, '<<<props')
        let tips = `${props.score.total} is your total score`;
        // evaluate total score w message
        if (props.score.total < 6) {
            tips += 'Definitely some room for improvement!'
        }
        if (props.score.total >= 6 && props.score.total < 11) {
            tips += 'Great start, follow the tips to make your password even stronger!'
        }
        if (props.score.total >= 11 && props.score.total < 15) {
            tips += 'Almost a perfect password!'
        }


        // give tips on the two lowest scoring areas
        
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