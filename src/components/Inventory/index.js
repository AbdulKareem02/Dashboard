import SideNavbar from '../SideNavbar'
import Navbar from '../Navbar'

const Inventory = () => (
  <>
    <Navbar />
    <div className="dashboard-bg-container">
      <SideNavbar />
      <div>
        <h3>Inventory Section</h3>
      </div>
    </div>
  </>
)

export default Inventory
