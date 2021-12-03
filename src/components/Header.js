import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className="header">
      <h1 style={{ padding: '10px', borderBottom: "5px solid gold" }}>{title}</h1>
      {location.pathname === "/" && <Button color={showAdd ? "gold" : "#fff"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />}
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