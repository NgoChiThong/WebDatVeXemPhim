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
import { useParams } from 'react-router-dom'

const EditMovie = () => {
  const { id } = useParams()
  const [startDate, setStartDate] = useState(new Date())
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Sửa phim: {id}</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3">
              <CCol xs={12}>
                <CFormLabel htmlFor="inputName">Tên phim</CFormLabel>
                <CFormInput type="text" id="inputName" value="Phim 1" />
              </CCol>
              <CCol xs={12}>
                <CFormTextarea
                  id="des"
                  label="Mô tả phim"
                  rows={3}
                  text="Từ 8 đến 12 dòng."
                  value="Phim 1"
                ></CFormTextarea>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="trailer">Link trailer</CFormLabel>
                <CFormInput type="text" id="trailer" value="https://" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="cens">Phân loại phim</CFormLabel>
                <CFormSelect id="cens">
                  <option>Chọn phân loại phim...</option>
                  <option value="P">P</option>
                  <option value="C13">C13</option>
                  <option value="C16">C16</option>
                  <option value="C18">C18</option>
                </CFormSelect>
              </CCol>
              <CCol xs={12}>
                <CFormLabel htmlFor="type">Thể loại phim</CFormLabel>
                <CFormInput id="type" type="text" value="Tình cảm" />
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
                <CFormInput id="time" value="1:30:00" />
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
                <CFormInput id="poster" value="https://" />
              </CCol>
              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  Cập nhật
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EditMovie
