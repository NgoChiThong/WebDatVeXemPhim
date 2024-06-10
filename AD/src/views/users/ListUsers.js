import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton, CFormInput } from '@coreui/react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

const ListUsers = () => {
  const [filterText, setFilterText] = useState('')
  const navigate = useNavigate()
  const columns = [
    {
      name: 'Tên người dùng',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Họ và tên',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Số điện thoại',
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: 'Tác vụ',
      cell: (row) => (
        <div>
          <CButton color="success" variant="outline" onClick={() => userDetail(row.id)}>
            Xem
          </CButton>
          {/*<CButton*/}
          {/*  color="warning"*/}
          {/*  variant="outline"*/}
          {/*  onClick={() => movieEdit(row.id)}*/}
          {/*  style={{ marginLeft: '10px' }}*/}
          {/*>*/}
          {/*  Sửa*/}
          {/*</CButton>*/}
          {/*<CButton*/}
          {/*  color="danger"*/}
          {/*  variant="outline"*/}
          {/*  onClick={() => handleDelete(row.id)}*/}
          {/*  style={{ marginLeft: '10px' }}*/}
          {/*>*/}
          {/*  Xóa*/}
          {/*</CButton>*/}
        </div>
      ),
    },
  ]

  const data = [
    { id: 1, username: 'user1', name: 'Nguyen Van A', email: 'user1@example.com', phone: '0901234567' },
    { id: 2, username: 'user2', name: 'Tran Thi B', email: 'user2@example.com', phone: '0901234568' },
    { id: 3, username: 'user3', name: 'Le Van C', email: 'user3@example.com', phone: '0901234569' },
    { id: 4, username: 'user4', name: 'Pham Thi D', email: 'user4@example.com', phone: '0901234570' },
    { id: 5, username: 'user5', name: 'Hoang Van E', email: 'user5@example.com', phone: '0901234571' },
    { id: 6, username: 'user6', name: 'Ngo Thi F', email: 'user6@example.com', phone: '0901234572' },
    { id: 7, username: 'user7', name: 'Dang Van G', email: 'user7@example.com', phone: '0901234573' },
    { id: 8, username: 'user8', name: 'Vo Thi H', email: 'user8@example.com', phone: '0901234574' },
    { id: 9, username: 'user9', name: 'Bui Van I', email: 'user9@example.com', phone: '0901234575' },
    { id: 10, username: 'user10', name: 'Vu Thi J', email: 'user10@example.com', phone: '0901234576' },
    { id: 11, username: 'user11', name: 'Nguyen Van K', email: 'user11@example.com', phone: '0901234577' },
    { id: 12, username: 'user12', name: 'Tran Thi L', email: 'user12@example.com', phone: '0901234578' },
    { id: 13, username: 'user13', name: 'Le Van M', email: 'user13@example.com', phone: '0901234579' },
    { id: 14, username: 'user14', name: 'Pham Thi N', email: 'user14@example.com', phone: '0901234580' },
    { id: 15, username: 'user15', name: 'Hoang Van O', email: 'user15@example.com', phone: '0901234581' },
    { id: 16, username: 'user16', name: 'Ngo Thi P', email: 'user16@example.com', phone: '0901234582' },
    { id: 17, username: 'user17', name: 'Dang Van Q', email: 'user17@example.com', phone: '0901234583' },
    { id: 18, username: 'user18', name: 'Vo Thi R', email: 'user18@example.com', phone: '0901234584' },
    { id: 19, username: 'user19', name: 'Bui Van S', email: 'user19@example.com', phone: '0901234585' },
    { id: 20, username: 'user20', name: 'Vu Thi T', email: 'user20@example.com', phone: '0901234586' },
  ]

  const handleDelete = (id) => {
    console.log('Delete ID:', id)
    // Thực hiện các thao tác xóa tại đây, ví dụ:
    // deleteItem(id).then(() => reloadData())
  }

  const subHeaderComponent = (
    <CFormInput
      type="text"
      placeholder="Tìm kiếm..."
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
    />
  )

  const filteredData = data.filter(
    (item) =>
      item.id.toString().includes(filterText) ||
      item.class.toLowerCase().includes(filterText.toLowerCase()) ||
      item.heading1.toLowerCase().includes(filterText.toLowerCase()) ||
      item.heading2.toLowerCase().includes(filterText.toLowerCase()),
  )
  const handleAddNew = () => {
    navigate('/users/add-new-user')
  }
  const userDetail = (id) => {
    console.log('Movie ID:', id)
    // Thực hiện các thao tác chỉnh sửa tại đây, ví dụ:
    navigate(`/users/user-detail/${id}`)
  }
  const movieEdit = (id) => {
    console.log('Movie ID:', id)
    // Thực hiện các thao tác chỉnh sửa tại đây, ví dụ:
  //  navigate(`/movies/edit-movie/${id}`)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Danh sách người dùng</strong>
          </CCardHeader>
          <CCardBody>
            <DataTable
              columns={columns}
              data={filteredData}
              pagination
              subHeader
              subHeaderComponent={subHeaderComponent}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        {/*<CCard className="mb-4">*/}
        {/*  <CCardHeader>*/}
        {/*    <strong>Quản người dùng</strong>*/}
        {/*  </CCardHeader>*/}
        {/*  <CCardBody>*/}
        {/*    <CButton color="primary" variant="outline" onClick={() => handleAddNew()}>*/}
        {/*      Thêm người dùng*/}
        {/*    </CButton>*/}
        {/*  </CCardBody>*/}
        {/*</CCard>*/}
      </CCol>
    </CRow>
  )
}

export default ListUsers
