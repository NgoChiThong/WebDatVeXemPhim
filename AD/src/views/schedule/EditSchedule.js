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
import { useParams } from 'react-router-dom'

const EditSchedule = () => {
  const { id } = useParams()
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
            <strong>Sửa lịch chiếu</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormLabel htmlFor="trailer">ID phim</CFormLabel>
                <CFormInput type="text" id="trailer" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="cens">ID phòng chiếu</CFormLabel>
                <CFormInput type="text" id="cens" />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="daterea">Ngày chiếu</CFormLabel>
                <CCol className="col-12">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="form-control"
                  />
                </CCol>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="time">Thời gian bắt đầu</CFormLabel>
                <CFormInput
                  type="time"
                  id="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="timeend">Thời gian kết thúc</CFormLabel>
                <CFormInput
                  type="time"
                  id="timeend"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </CCol>
              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  Sửa lịch chiếu
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EditSchedule