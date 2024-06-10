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
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'

const AddNewRoom = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [startTime, setStartTime] = useState('10:00')

  const [endTime, setEndTime] = useState('18:00')

  console.log(startTime)
  console.log(endTime)
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Thêm phòng chiếu</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormLabel htmlFor="trailer">ID rạp chiếu</CFormLabel>
                <CFormInput type="text" id="trailer" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="cens">Tên phòng chiếu</CFormLabel>
                <CFormInput type="text" id="cens" />
              </CCol>
              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  Thêm rạp chiếu
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddNewRoom
