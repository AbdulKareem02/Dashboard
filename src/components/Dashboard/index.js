import SideNavbar from '../SideNavbar'
import Navbar from '../Navbar'

const Dashboard = () => (
  <>
    <Navbar />
    <div className="dashboard-bg-container">
      <SideNavbar />
      <div>
        <h3>Dashboard Section</h3>
      </div>
    </div>
  </>
)

export default Dashboard
