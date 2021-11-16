import propTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header
