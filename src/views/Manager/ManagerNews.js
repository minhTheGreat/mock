import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ManagerNews extends Component {

  render() {
    return (
      <div>
      <div class="app-title">
      <div>
        <h1><i class="fa fa-th-list"></i>&nbsp; Quản lí tin tức</h1>
        <p></p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
        <li class="breadcrumb-item"><a href="#">Tin tức</a></li>
      </ul>
    </div>

    <div class="row">
      <div class="col-lg-7">
          <p class="bs-component ">
            <a href="addnews.html">
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
                  <th>Tiêu đề</th>
                  <th>Chuyên mục</th>
                  <th>Hình ảnh</th>
                  <th>Ngày đăng</th>
                  <th>Người đăng</th>
                  <th>Nội dung vắn tắt</th>
                  <th>Thực hiện</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Tuyển dụng</td>
                  <td>
                      Tuyển dụng
                  </td>
                  <td>htttps://link.com</td>
                  <td>10/01/2019</td>
                  <td>Hiếu</td>
                  <td>nội dung nội dung nội dung</td>
                  <td>
                    <a href="editnews.html"><i class="fa fa-lg fa-edit"></i></a> &nbsp
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagerNews)
