import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton, CFormInput } from '@coreui/react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

const ListSchedule = () => {
  const [filterText, setFilterText] = useState('')
  const navigate = useNavigate()
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'ID phim',
      selector: (row) => row.idmovie,
      sortable: true,
    },
    {
      name: 'ID phòng chiếu',
      selector: (row) => row.idroom,
      sortable: true,
    },
    {
      name: 'Ngày chiếu',
      selector: (row) => row.scheduledate,
      sortable: true,
    },
    {
      name: 'Thời gian bắt đầu',
      selector: (row) => row.schedulestart,
      sortable: true,
    },
    {
      name: 'Thời gian kết thúc',
      selector: (row) => row.scheduleend,
      sortable: true,
    },
    {
      name: 'Tác vụ',
      cell: (row) => (
        <div>
          <CButton
            color="warning"
            variant="outline"
            onClick={() => scheduleEdit(row.id)}
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
    { id: 1, idmovie: 1, idroom: 101, scheduledate: '2023-01-01', schedulestart: '10:00', scheduleend: '12:00' },
    { id: 2, idmovie: 2, idroom: 102, scheduledate: '2023-01-02', schedulestart: '12:00', scheduleend: '14:20' },
    { id: 3, idmovie: 3, idroom: 103, scheduledate: '2023-01-03', schedulestart: '14:30', scheduleend: '16:20' },
    { id: 4, idmovie: 4, idroom: 104, scheduledate: '2023-01-04', schedulestart: '16:30', scheduleend: '18:10' },
    { id: 5, idmovie: 5, idroom: 105, scheduledate: '2023-01-05', schedulestart: '18:20', scheduleend: '19:55' },
    { id: 6, idmovie: 6, idroom: 106, scheduledate: '2023-01-06', schedulestart: '20:00', scheduleend: '22:10' },
    { id: 7, idmovie: 7, idroom: 107, scheduledate: '2023-01-07', schedulestart: '22:15', scheduleend: '00:20' },
    { id: 8, idmovie: 8, idroom: 108, scheduledate: '2023-01-08', schedulestart: '10:00', scheduleend: '12:30' },
    { id: 9, idmovie: 9, idroom: 109, scheduledate: '2023-01-09', schedulestart: '12:45', scheduleend: '14:45' },
    { id: 10, idmovie: 10, idroom: 110, scheduledate: '2023-01-10', schedulestart: '15:00', scheduleend: '16:30' },
    { id: 11, idmovie: 1, idroom: 101, scheduledate: '2023-01-11', schedulestart: '17:00', scheduleend: '19:00' },
    { id: 12, idmovie: 2, idroom: 102, scheduledate: '2023-01-12', schedulestart: '19:15', scheduleend: '21:35' },
    { id: 13, idmovie: 3, idroom: 103, scheduledate: '2023-01-13', schedulestart: '21:45', scheduleend: '23:35' },
    { id: 14, idmovie: 4, idroom: 104, scheduledate: '2023-01-14', schedulestart: '10:00', scheduleend: '11:40' },
    { id: 15, idmovie: 5, idroom: 105, scheduledate: '2023-01-15', schedulestart: '12:00', scheduleend: '13:35' },
    { id: 16, idmovie: 6, idroom: 106, scheduledate: '2023-01-16', schedulestart: '13:45', scheduleend: '15:55' },
    { id: 17, idmovie: 7, idroom: 107, scheduledate: '2023-01-17', schedulestart: '16:00', scheduleend: '18:00' },
    { id: 18, idmovie: 8, idroom: 108, scheduledate: '2023-01-18', schedulestart: '18:10', scheduleend: '20:40' },
    { id: 19, idmovie: 9, idroom: 109, scheduledate: '2023-01-19', schedulestart: '20:50', scheduleend: '22:50' },
    { id: 20, idmovie: 10, idroom: 110, scheduledate: '2023-01-20', schedulestart: '23:00', scheduleend: '00:30' },
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
    navigate('/schedule/add-new-schedule')
  }
  const scheduleEdit = (id) => {
    console.log('Schedule ID:', id)
    // Thực hiện các thao tác chỉnh sửa tại đây, ví dụ:
    navigate(`/schedule/edit-schedule/${id}`)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Lịch chiếu</strong>
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
            <strong>Quản lý lịch chiếu</strong>
          </CCardHeader>
          <CCardBody>
            <CButton color="primary" variant="outline" onClick={() => handleAddNew()}>
              Thêm lịch chiếu
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ListSchedule
