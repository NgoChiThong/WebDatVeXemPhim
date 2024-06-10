import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton, CFormInput } from '@coreui/react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

const NowShowing = () => {
  const navigate = useNavigate()
  const [filterText, setFilterText] = useState('')
  const columns = [
    {
      name: 'ID phim',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Tên',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Ngày phát hành',
      selector: (row) => row.releaseDate,
      sortable: true,
    },
    {
      name: 'Danh mục phim',
      selector: (row) => row.cen,
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
    { id: 1, name: 'Movie 1', releaseDate: '2023-01-01', cen: 'P' },
    { id: 2, name: 'Movie 2', releaseDate: '2023-02-01', cen: 'C13' },
    { id: 3, name: 'Movie 3', releaseDate: '2023-03-01', cen: 'C16' },
    { id: 4, name: 'Movie 4', releaseDate: '2023-04-01', cen: 'C18' },
    { id: 5, name: 'Movie 5', releaseDate: '2023-05-01', cen: 'P' },
    { id: 6, name: 'Movie 6', releaseDate: '2023-06-01', cen: 'C13' },
    { id: 7, name: 'Movie 7', releaseDate: '2023-07-01', cen: 'C16' },
    { id: 8, name: 'Movie 8', releaseDate: '2023-08-01', cen: 'C18' },
    { id: 9, name: 'Movie 9', releaseDate: '2023-09-01', cen: 'P' },
    { id: 10, name: 'Movie 10', releaseDate: '2023-10-01', cen: 'C13' },
  ]


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
            <strong>Danh sách phim sắp chiếu</strong>
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
