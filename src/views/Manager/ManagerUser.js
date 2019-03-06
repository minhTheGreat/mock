import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'
import * as AuthAction from '../../actions/userActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'C:/Users/Admin/AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';
import Header from '../../components/Header'
import '../../styles/css/main.css';


export class ManagerUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
    }
  }
  componentDidMount() {
    axios.get('http://5c7cd0f5dd19010014c8e92c.mockapi.io/api/v1/users')
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })

  }
  tabRow(){
    return this.state.users.map((object,i)=>{
      return <TableRow obj={object} key={i}/>
    })
  }


  render() {
    return (
      <div>
        <div class="app-title">
          <div>
            <h1><i class="fa fa-user"></i>&nbsp; Quản lí người dùng</h1>
            <p></p>
          </div>
          <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item"><a href="#">User</a></li>
          </ul>
        </div>

        <div class="row">
          <div class="col-lg-7">
            <p class="bs-component ">
              <a href="adduser.html">
                <button class="btn btn-primary btn-right" type="button">+ Thêm</button>
              </a>
            </p>
          </div>
          <div class="col-md-12">
            <div class="tile">
              <div class="tile-body">
                <table class="table table-hover table-bordered" id="sampleTable">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Email</th>
                      <th>Tên đầy đủ</th>
                      <th>Ngày sinh</th>
                      <th>Địa chỉ</th>
                      <th>ID</th>
                      <th>Thực hiện</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.tabRow()}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
 
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerUser)
