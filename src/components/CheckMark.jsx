import check from '../assets/checkmark.svg'
import Proptypes from 'prop-types'
import '../styles/CheckMark.css'

// eslint-disable-next-line react/prop-types
const Checkmark = ({ done }) => {
    return (
        <div>
            {
                done ?
                    <img className="image-size" src={check} alt="Checkmark" />
                    : <div style={{ width: '36px' }}></div>
            }

        </div>
    )
}

Checkmark.propTypes = {
    done: Proptypes.bool,
}
export default Checkmark;