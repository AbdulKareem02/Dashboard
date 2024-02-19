import {Component} from 'react'
import {LiaFileImportSolid} from 'react-icons/lia'
import {IoMdSend, IoIosSearch} from 'react-icons/io'
import {MdPrint, MdFilterListAlt} from 'react-icons/md'
import {TbArrowsMoveVertical} from 'react-icons/tb'
import SideNavbar from '../SideNavbar'
import Navbar from '../Navbar'

import './index.css'

const tabOptions = [
  {id: 1, text: 'Pending'},
  {id: 2, text: 'Accepted'},
  {id: 3, text: 'AWS Created'},
  {id: 4, text: 'Ready To Shift'},
  {id: 5, text: 'Shipped'},
  {id: 6, text: 'Completed'},
  {id: 7, text: 'Cancelled'},
]

const orderDetails = [
  {
    id: 1,
    channel: '$',
    orderNumber: 'TKN20203754',
    orderDate: '2022-05-04',
    city: 'Lucknow',
    customerName: 'Abdul Kareem',
    orderValue: 0.0,
    status: 'pending',
    operation: [{id: 1, text: 'Actions'}],
  },
  {
    id: 1,
    channel: '$',
    orderNumber: 'TKN20203754',
    orderDate: '2022-05-04',
    city: 'Lucknow',
    customerName: 'Abdul Kareem',
    orderValue: 0.0,
    status: 'pending',
    operation: [{id: 1, text: 'Actions'}],
  },
  {
    id: 1,
    channel: '$',
    orderNumber: 'TKN20203754',
    orderDate: '2022-05-04',
    city: 'Lucknow',
    customerName: 'Abdul Kareem',
    orderValue: 0.0,
    status: 'pending',
    operation: [{id: 1, text: 'Actions'}],
  },
]

class Orders extends Component {
  state = {activeOption: tabOptions[0].id}

  onOptionClick = value => {
    this.setState({activeOption: value})
  }

  renderTabOptions = () => {
    const {activeOption} = this.state
    return (
      <div className="cate-tab-buttons">
        {tabOptions.map(item => {
          const activeTab = activeOption === item.id
          const className = activeTab ? 'active-tab-option' : 'tab-option'
          return (
            <button
              onClick={() => this.onOptionClick(item.id)}
              className={className}
              type="button"
            >
              {item.text}
            </button>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="order-main-bg-container">
        <Navbar />
        <div className="orders-bg-container">
          <SideNavbar />
          <div className="order-container">
            <h3>Orders Section</h3>
            {this.renderTabOptions()}
            <div className="sub-buttons-container">
              <div className="sub-button-cont">
                <button className="sub-buttons" type="button">
                  <LiaFileImportSolid className="sub-icon" />
                  Import Orders
                </button>
                <button className="sub-buttons" type="button">
                  <IoMdSend className="sub-icon" />
                  Accept
                </button>
                <button className="sub-buttons" type="button">
                  <MdPrint className="sub-icon" />
                  Print
                </button>
              </div>
              <div>
                <button type="button" className="refresh-button">
                  Refresh
                </button>
              </div>
            </div>

            <table className="table-container">
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th className="td-head">
                  Channel <MdFilterListAlt className="table-icon" />
                  <TbArrowsMoveVertical className="table-icon" />
                </th>
                <th className="td-head">
                  Order No <TbArrowsMoveVertical className="table-icon" />
                </th>
                <th className="td-head">
                  Order Date <IoIosSearch className="table-icon" />
                </th>
                <th className="td-head">
                  Customer Name <IoIosSearch className="table-icon" />
                </th>
                <th className="td-head">
                  City <TbArrowsMoveVertical className="table-icon" />
                </th>
                <th className="td-head">Order Value</th>
                <th className="td-head">
                  Status <TbArrowsMoveVertical className="table-icon" />
                </th>
                <th className="td-head">Operations</th>
              </tr>
              {orderDetails.map(item => (
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <td className="rows-data">{item.channel}</td>
                  <td className="rows-data order-num">{item.orderNumber}</td>
                  <td className="rows-data">{item.orderDate}</td>
                  <td className="rows-data">{item.customerName}</td>
                  <td className="rows-data">{item.city}</td>
                  <td className="rows-data">{item.orderValue}</td>
                  <td className="rows-data pending-sts">{item.status}</td>
                  {item.operation.map(operationItem => (
                    <td>
                      <select className="operation-dropdown">
                        <option>{operationItem.text}</option>
                      </select>
                    </td>
                  ))}
                </tr>
              ))}
            </table>

            <div className="page-nation-container">
              <button type="button" className="page-nation-button">
                -
              </button>
              <button type="button" className="page-nation-button">
                1
              </button>
              <button type="button" className="page-nation-button">
                +
              </button>
              <select>
                <option>20 pages</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Orders
