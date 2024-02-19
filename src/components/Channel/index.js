import SideNavbar from '../SideNavbar'
import Navbar from '../Navbar'

const Channel = () => (
  <>
    <Navbar />
    <div className="dashboard-bg-container">
      <SideNavbar />
      <div>
        <h3>Channel Section</h3>
      </div>
    </div>
  </>
)

export default Channel
