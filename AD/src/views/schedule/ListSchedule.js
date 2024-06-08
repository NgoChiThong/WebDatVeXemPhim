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
      name: 'Movie ID',
      selector: (row) => row.class,
      sortable: true,
    },
    {
      name: 'Room ID',
      selector: (row) => row.heading1,
      sortable: true,
    },
    {
      name: 'Schedule Date',
      selector: (row) => row.heading2,
      sortable: true,
    },
    {
      name: 'Schedule Start',
      selector: (row) => row.heading3,
      sortable: true,
    },
    {
      name: 'Schedule End',
      selector: (row) => row.heading4,
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
    {
      id: 1,
      class: 'Mark',
      heading1: 'Otto',
      heading2: '@mdo',
      heading3: '@mdo',
      heading4: '@mdo',
    },
    {
      id: 2,
      class: 'Jacob',
      heading1: 'Thornton',
      heading2: '@fat',
      heading3: '@mdo',
      heading4: '@mdo',
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading1: 'ColSpan',
      heading2: '@twitter',
      heading3: '@mdo',
      heading4: '@mdo',
    },
    {
      id: 4,
      class: 'Larry the Bird',
      heading1: 'ColSpan',
      heading2: '@twitter',
      heading3: '@mdo',
      heading4: '@mdo',
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
            <strong>Quản lý phim</strong>
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
