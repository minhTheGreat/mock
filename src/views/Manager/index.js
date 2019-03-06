import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'
import * as AuthAction from '../../actions/userActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'C:/Users/Admin/AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';
import '../../styles/css/main.css';
import {Link } from 'react-router-dom'

import Header from '../../components/Header'
import ManagerUser from './ManagerUser';
class Manager extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
    }
  }
  componentDidMount() {
  }
  render() {
    return (
    <div>
    <div>
    {/* Navbar*/}
    <Header/>
    {/* Sidebar menu*/}
    <div className="app-sidebar__overlay" data-toggle="sidebar" />
    <aside className="app-sidebar">
      <div className="app-sidebar__user"><img className="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image" />
        <div>
          <p className="app-sidebar__user-name">ITSOL</p>
          <p className="app-sidebar__user-designation">Talents Trusted Partner</p>
        </div>
      </div>
      <ul className="app-menu">
        <li><Link className="app-menu__item active" to="/manager"><i className="app-menu__icon fa fa-dashboard" /><span className="app-menu__label">Trang chủ</span></Link></li>
        <li>
          <Link className="app-menu__item" to="/manager/news">
            <i className="app-menu__icon fa fa-th-list" />
            <span className="app-menu__label">Quản lí tin tức</span>
          </Link>
        </li>
        <li>
          <Link className="app-menu__item" to="/manager/category">
            <i className="app-menu__icon fa fa-book" />
            <span className="app-menu__label">Quản lí chuyên mục</span>
          </Link>  
        </li>
        <li>
          <Link className="app-menu__item" to="/manager/user">
            <i className="app-menu__icon fa fa-user" />
            <span className="app-menu__label">Quản lí người dùng</span>
          </Link>  
        </li>
        <li>
          <Link className="app-menu__item" to="/manager/caldidateFile">
            <i className="app-menu__icon fa fa-file-text" />
            <span className="app-menu__label">Quản lí hồ sơ</span>
          </Link>  
        </li>
        <li>
          <Link className="app-menu__item" to="/manager/job">
            <i className="app-menu__icon fa fa-address-card-o" />
            <span className="app-menu__label">Quản lí nghề nghiệp</span>
          </Link>  
        </li>
      </ul>
    </aside>
    <main className="app-content">
      <ManagerUser/>
    </main>
  </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Manager)
