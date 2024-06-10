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

const OrderDetail = () => {
  const { id } = useParams()
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Chi tiết đơn hàng {id}</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormLabel htmlFor="trailer">Mã đặt vé</CFormLabel>
                <CFormInput type="text" id="trailer"  value="09233" disabled="true"/>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="cens">Ngày đặt vé</CFormLabel>
                <CFormInput type="text" id="cens" value="1/1/2024" disabled="true"/>
              </CCol>
              <CCol md={12}>
                <CFormLabel htmlFor="cens">Tên phim</CFormLabel>
                <CFormInput type="text" id="cens" value="KH001" disabled="true"/>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="cens">Ngày chiếu</CFormLabel>
                <CFormInput type="text" id="cens" value="LC001" disabled="true"/>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="cens">Thời gian bắt đầu chiếu</CFormLabel>
                <CFormInput type="text" id="cens" value="LC001" disabled="true"/>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="cens">Rạp chiếu</CFormLabel>
                <CFormInput type="text" id="cens" value="LC001" disabled="true"/>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="cens">Phòng chiếu</CFormLabel>
                <CFormInput type="text" id="cens" value="LC001" disabled="true"/>
              </CCol>
              <CCol md={12}>
                <CFormLabel htmlFor="cens">Danh sách vé đã đặt</CFormLabel>
                <CFormInput type="text" id="cens" value="LC001" disabled="true"/>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="cens">Tổng tiền</CFormLabel>
                <CFormInput type="text" id="cens" value="LC001" disabled="true"/>
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

export default OrderDetail
