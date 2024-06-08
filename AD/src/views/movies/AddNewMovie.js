import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AddNewMovie = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Thêm phim</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3">
              <CCol xs={12}>
                <CFormLabel htmlFor="inputName">Tên phim</CFormLabel>
                <CFormInput type="text" id="inputName" />
              </CCol>
              <CCol xs={12}>
                <CFormTextarea
                  id="des"
                  label="Mô tả phim"
                  rows={3}
                  text="Từ 8 đến 12 dòng."
                ></CFormTextarea>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="trailer">Link trailer</CFormLabel>
                <CFormInput type="text" id="trailer" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="cens">Phân loại phim</CFormLabel>
                <CFormSelect id="cens">
                  <option>Chọn phân loại phim...</option>
                  <option>P</option>
                  <option>C13</option>
                  <option>C16</option>
                  <option>C18</option>
                </CFormSelect>
              </CCol>
              <CCol xs={12}>
                <CFormLabel htmlFor="type">Thể loại phim</CFormLabel>
                <CFormInput id="type" type="text" />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="daterea">Ngày phát hành</CFormLabel>
                <CCol className="col-12">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="form-control"
                  />
                </CCol>
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="time">Thời lượng phim</CFormLabel>
                <CFormInput id="time" />
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="inputState">Định dạng phim</CFormLabel>
                <CFormSelect id="format">
                  <option>Chọn định dạng...</option>
                  <option>2D</option>
                </CFormSelect>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="poster">Link Poster</CFormLabel>
                <CFormInput id="poster" />
              </CCol>
              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  Thêm phim
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddNewMovie
