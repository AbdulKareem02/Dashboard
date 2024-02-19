import {FiMoon} from 'react-icons/fi'
import {FaRegBell} from 'react-icons/fa'
import {MdGTranslate} from 'react-icons/md'
import './index.css'

const Navbar = () => (
  <div className="nav-bar">
    <img src="" alt="website-logo" />

    <div className="nav-options">
      <FiMoon className="nav-icon" />
      <FaRegBell className="nav-icon" />
      <MdGTranslate className="nav-icon" />
      <img src="" alt="avatar" />
    </div>
  </div>
)

export default Navbar
