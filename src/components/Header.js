import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 style={{ padding: '10px', borderBottom: "5px solid gold" }}>{title}</h1>
      <Button color={showAdd ? "gold" : "#fff"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string,
}


export default Header