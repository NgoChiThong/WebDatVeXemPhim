import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton, CFormInput } from '@coreui/react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

const ListRoom = () => {
  const [filterText, setFilterText] = useState('')
  const navigate = useNavigate()
  const columns = [
    {
      name: 'ID phòng chiếu',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'ID rạp',
      selector: (row) => row.class,
      sortable: true,
    },
    {
      name: 'Tên phòng chiếu',
      selector: (row) => row.heading1,
      sortable: true,
    },
    {
      name: 'Tác vụ',
      cell: (row) => (
        <div>
          <CButton color="success" variant="outline" onClick={() => cinemaDetail(row.id)}>
            Xem
          </CButton>
          <CButton
            color="warning"
            variant="outline"
            onClick={() => cinemaEdit(row.id)}
            style={{ marginLeft: '10px' }}
          >
            Sửa
          </CButton>
          <CButton
            color="danger"
            variant="outline"
            onClick={() => handleDelete(row.id)}
            style={{ marginLeft: '10px' }}
          >
            Xóa
          </CButton>
        </div>
      ),
    },
  ]

  const data = [
    {
      id: 1,
      class: 'CineStart Quốc Thanh',
      heading1: 'Otto',
    },
    {
      id: 2,
      class: 'Jacob',
      heading1: 'Thornton',
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading1: 'ColSpan',
    },
    {
      id: 4,
      class: 'Larry the Bird',
      heading1: 'ColSpan',
    },
  ]

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
    navigate('/cinema/add-new-cinema')
  }
  const cinemaDetail = (id) => {
    // Thực hiện các thao tác chỉnh sửa tại đây, ví dụ:
    navigate(`/cinema/cinema-detail/${id}`)
  }
  const cinemaEdit = (id) => {
    // Thực hiện các thao tác chỉnh sửa tại đây, ví dụ:
    navigate(`/cinema/edit-cinema/${id}`)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Danh sách phòng chiếu</strong>
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
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Quản lý rạp</strong>
          </CCardHeader>
          <CCardBody>
            <CButton color="primary" variant="outline" onClick={() => handleAddNew()}>
              Thêm rạp
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ListRoom
