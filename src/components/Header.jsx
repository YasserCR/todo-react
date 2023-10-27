import PropTypes from 'prop-types';
import '../styles/Header.css'

const Header = ({ counter }) => {

    return (
        <div>
            <h1 className="class-header-title header">
                {`Hay ${counter} tareas`}
            </h1>
        </div>
    )
};

Header.propTypes = {
    counter: PropTypes.number
}

Header.defaultProps = {
    counter: 0
}

export default Header;