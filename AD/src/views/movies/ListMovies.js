import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton, CFormInput } from '@coreui/react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

const ListMovies = () => {
  const [filterText, setFilterText] = useState('')
  const navigate = useNavigate()
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
          <CButton color="success" variant="outline" onClick={() => movieDetail(row.id)}>
            Xem
          </CButton>
          <CButton
            color="warning"
            variant="outline"
            onClick={() => movieEdit(row.id)}
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
    navigate('/movies/add-new-movie')
  }
  const movieDetail = (id) => {
    console.log('Movie ID:', id)
    // Thực hiện các thao tác chỉnh sửa tại đây, ví dụ:
    navigate(`/movies/movie-detail/${id}`)
  }
  const movieEdit = (id) => {
    console.log('Movie ID:', id)
    // Thực hiện các thao tác chỉnh sửa tại đây, ví dụ:
    navigate(`/movies/edit-movie/${id}`)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Danh sách tất cả phim</strong>
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
              Thêm phim
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ListMovies
