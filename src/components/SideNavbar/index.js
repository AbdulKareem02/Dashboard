import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const sideMenuOptions = [
  {id: 1, text: 'Dashboard'},
  {id: 2, text: 'Inventory'},
  {id: 3, text: 'Orders'},
  {id: 4, text: 'Shopping'},
  {id: 5, text: 'Channel'},
]

class SideNavbar extends Component {
  getClassName = path => {
    const {match} = this.props
    const currentPath = match.path
    console.log(currentPath)
    if (currentPath === path) {
      return 'active-button'
    }
    return 'option-button'
  }

  renderSidebarOptions = () => (
    <div className="side-options-container">
      {sideMenuOptions.map(eachItem => (
        <Link key={eachItem.id} to={`/${eachItem.text.toLowerCase()}`}>
          <button
            className={this.getClassName(`/${eachItem.text.toLowerCase()}`)}
            type="button"
          >
            {eachItem.text}
          </button>
        </Link>
      ))}
    </div>
  )

  render() {
    return <div>{this.renderSidebarOptions()}</div>
  }
}

export default withRouter(SideNavbar)
