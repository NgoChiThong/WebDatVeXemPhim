import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import 'react-datepicker/dist/react-datepicker.css'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const { id } = useParams()
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Chi tiết phim: {id} </strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3">
              <CCol xs={12}>
                <CFormLabel htmlFor="inputName">Tên phim</CFormLabel>
                <CFormInput type="text" id="inputName" value="Phim 1" disabled={true} />
              </CCol>
              <CCol xs={12}>
                <CFormTextarea
                  id="des"
                  label="Mô tả phim"
                  rows={3}
                  text="Từ 8 đến 12 dòng."
                  value="Hello 123"
                  disabled={true}
                ></CFormTextarea>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="trailer">Link trailer</CFormLabel>
                <CFormInput
                  type="text"
                  id="trailer"
                  value="https://www.google.com"
                  disabled={true}
                />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="cens">Phân loại phim</CFormLabel>
                <CFormInput type="text" id="cens" value="C16" disabled={true} />
              </CCol>
              <CCol xs={12}>
                <CFormLabel htmlFor="type">Thể loại phim</CFormLabel>
                <CFormInput id="type" type="text" value="Hài hước" disabled={true} />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="daterea">Ngày phát hành</CFormLabel>
                <CCol className="col-12">
                  <CFormInput id="type" type="text" value="2024-06-07" disabled={true} />
                </CCol>
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="time">Thời lượng phim</CFormLabel>
                <CFormInput id="time" value="1:30:00" disabled={true} />
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="inputState">Định dạng phim</CFormLabel>
                <CFormInput id="time" value="2D" disabled={true} />
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="poster">Link Poster</CFormLabel>
                <CFormInput
                  type="text"
                  id="trailer"
                  value="https://www.google.com"
                  disabled={true}
                />
              </CCol>
              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  Trở lại
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default MovieDetail
