import React, { Component } from 'react'

import { connect } from 'react-redux'

export class ManagerCategory extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  render() {
    return (
      <div>
      <div class="app-title">
      <div>
        <h1><i class="fa fa-book"></i>&nbsp; Quản lí chuyên mục</h1>
        <p></p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
        <li class="breadcrumb-item"><a href="#">Chuyên mục</a></li>
      </ul>
    </div>

    <div class="row">
      <div class="col-lg-7">
          <p class="bs-component ">
            <a href="addcategory.html">
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
                  <th>Tên chuyên mục</th>
                  <th>Ngày đăng</th>
                  <th>Người đăng</th>
                  <th>Thực hiện</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Tuyển dụng</td>
                  <td>10/01/2019</td>
                  <td>Hiếu</td>
                  <td>
                    <a href="editcategory.html"><i class="fa fa-lg fa-edit"></i></a> &nbsp
                    <a href="#"><i class="fa fa-lg fa-trash"></i></a>
                  </td>
                </tr>
               
                

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

export default connect(mapStateToProps, mapDispatchToProps)(ManagerCategory)
