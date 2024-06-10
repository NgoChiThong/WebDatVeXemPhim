import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton, CFormInput } from '@coreui/react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

const ListOrders = () => {
  const [filterText, setFilterText] = useState('')
  const navigate = useNavigate()
  const columns = [
    {
      name: 'Mã đặt vé',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Mã khách hàng',
      selector: (row) => row.class,
      sortable: true,
    },
    {
      name: 'Ngày đặt vé',
      selector: (row) => row.heading1,
      sortable: true,
    },
    {
      name: 'Id lịch chiếu',
      selector: (row) => row.heading2,
      sortable: true,
    },
    {
      name: 'Id lịch chiếu',
      selector: (row) => row.heading3,
      sortable: true,
    },
    {
      name: 'Tổng tiền',
      selector: (row) => row.heading4,
      sortable: true,
    },
    {
      name: 'Tác vụ',
      cell: (row) => (
        <div>
          <CButton color="success" variant="outline" onClick={() => orderDetail(row.id)}>
            Xem
          </CButton>
        </div>
      ),
    },
  ]

  const data = [
    {
      id: 'DV001',
      class: 'KH001',
      heading1: '2024-06-01',
      heading2: 'LC001',
      heading3: 'LC002',
      heading4: 500000,
    },
    {
      id: 'DV002',
      class: 'KH002',
      heading1: '2024-06-02',
      heading2: 'LC003',
      heading3: 'LC004',
      heading4: 600000,
    },
    {
      id: 'DV003',
      class: 'KH003',
      heading1: '2024-06-03',
      heading2: 'LC005',
      heading3: 'LC006',
      heading4: 700000,
    },
    {
      id: 'DV004',
      class: 'KH004',
      heading1: '2024-06-04',
      heading2: 'LC007',
      heading3: 'LC008',
      heading4: 800000,
    },
    {
      id: 'DV005',
      class: 'KH005',
      heading1: '2024-06-05',
      heading2: 'LC009',
      heading3: 'LC010',
      heading4: 900000,
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

  const orderDetail = (id) => {
    // Thực hiện các thao tác chỉnh sửa tại đây, ví dụ:
    navigate(`/orders/order-detail/${id}`)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Danh sách vé đã đặt</strong>
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

export default ListOrders
