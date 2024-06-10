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

const UserDetail = () => {
  const { id } = useParams()
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Chi tiết người dùng: {id} </strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3">
              <CCol xs={2}>
                <CFormLabel htmlFor="inputName">Id người dùng</CFormLabel>
                <CFormInput type="text" id="inputName" value="Phim 1" disabled={true} />
              </CCol>
              <CCol xs={4}>
                <CFormLabel htmlFor="inputName">Tên người dùng</CFormLabel>
                <CFormInput type="text" id="inputName" value="Phim 1" disabled={true} />
              </CCol>
              <CCol xs={6}>
                <CFormLabel htmlFor="inputName">Họ và tên người dùng</CFormLabel>
                <CFormInput type="text" id="inputName" value="Phim 1" disabled={true} />
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="cens">Ngày sinh</CFormLabel>
                <CFormInput type="text" id="cens" value="C16" disabled={true} />
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="cens">Giới tính</CFormLabel>
                <CFormInput type="text" id="cens" value="C16" disabled={true} />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="trailer">Địa chỉ email</CFormLabel>
                <CFormInput
                  type="text"
                  id="trailer"
                  value="user1@example.com.vn"
                  disabled={true}
                />
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="cens">Số điện thoại</CFormLabel>
                <CFormInput type="text" id="cens" value="0981234567" disabled={true} />
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

export default UserDetail
