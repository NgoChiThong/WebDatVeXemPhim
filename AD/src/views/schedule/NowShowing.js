import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton, CFormInput } from '@coreui/react'
import DataTable from 'react-data-table-component'

const columns = [
  {
    name: '#',
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: 'Class',
    selector: (row) => row.class,
    sortable: true,
  },
  {
    name: 'Heading',
    selector: (row) => row.heading1,
    sortable: true,
  },
  {
    name: 'Heading',
    selector: (row) => row.heading2,
    sortable: true,
  },
  {
    name: 'Tác vụ',
    cell: (row) => (
      <div>
        <CButton color="success" variant="outline" onClick={() => handleEdit(row.id)}>
          Xem
        </CButton>
        <CButton
          color="warning"
          variant="outline"
          onClick={() => handleEdit(row.id)}
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
  { id: 1, class: 'Mark', heading1: 'Otto', heading2: '@mdo' },
  { id: 2, class: 'Jacob', heading1: 'Thornton', heading2: '@fat' },
  { id: 3, class: 'Larry the Bird', heading1: 'ColSpan', heading2: '@twitter' },
  { id: 4, class: 'Larry the Bird', heading1: 'ColSpan', heading2: '@twitter' },
]

const handleEdit = (id) => {
  console.log('Edit ID:', id)
  // Thực hiện các thao tác chỉnh sửa tại đây, ví dụ:
  // navigate(`/edit/${id}`)
}

const handleDelete = (id) => {
  console.log('Delete ID:', id)
  // Thực hiện các thao tác xóa tại đây, ví dụ:
  // deleteItem(id).then(() => reloadData())
}

const NowShowing = () => {
  const [filterText, setFilterText] = useState('')

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

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Danh sách phim đang chiếu</strong>
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
    </CRow>
  )
}

export default NowShowing
