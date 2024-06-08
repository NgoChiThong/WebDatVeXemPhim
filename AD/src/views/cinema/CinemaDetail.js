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
  CRow,
} from '@coreui/react'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'
import { useParams } from 'react-router-dom'

const CinemaDetail = () => {
  const { id } = useParams()
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Chi tiết rạp chiếu {id}</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormLabel htmlFor="trailer">Tên rạp</CFormLabel>
                <CFormInput type="text" id="trailer" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="cens">Địa chỉ</CFormLabel>
                <CFormInput type="text" id="cens" />
              </CCol>
              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  Trở về
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CinemaDetail
