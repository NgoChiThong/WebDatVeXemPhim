import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
//phim
const ListMovies = React.lazy(() => import('./views/movies/ListMovies'))
const NowShowing = React.lazy(() => import('./views/movies/NowShowing'))
const AddNewMovie = React.lazy(() => import('./views/movies/AddNewMovie'))
const MovieDetail = React.lazy(() => import('./views/movies/MovieDetail'))
const EditMovie = React.lazy(() => import('./views/movies/EditMovie'))
const WillShowing = React.lazy(() => import('./views/movies/WillShowing'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

//lịch chiếu
const ListSchedule = React.lazy(() => import('./views/schedule/ListSchedule'))
const AddNewSchedule = React.lazy(() => import('./views/schedule/AddNewSchedule'))
const EditSchedule = React.lazy(() => import('./views/schedule/EditSchedule'))
//rap chieu
const ListCinema = React.lazy(() => import('./views/cinema/ListCinema'))
const AddNewCinema = React.lazy(() => import('./views/cinema/AddNewCinema'))
const CinemaDetail = React.lazy(() => import('./views/cinema/CinemaDetail'))
const CinemaEdit = React.lazy(() => import('./views/cinema/EditCinema'))
const ListRoom = React.lazy(() => import('./views/cinema/ListRoom'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/movies/list-moives', name: 'Danh sách phim', element: ListMovies },
  { path: '/movies/now-showing', name: 'Phim đang chiếu', element: NowShowing },
  { path: '/movies/add-new-movie', name: 'Thêm phim', element: AddNewMovie },
  { path: '/movies/movie-detail/:id', name: 'Chi tiết phim', element: MovieDetail },
  { path: '/movies/edit-movie/:id', name: 'Sửa phim', element: EditMovie },
  { path: '/movies/will-showing', name: 'Phim sắp chiếu', element: WillShowing },

  { path: '/schedule/list-schedule', name: 'Schedule', element: ListSchedule },
  { path: '/schedule/add-new-schedule', name: 'Add New Schedule', element: AddNewSchedule },
  { path: '/schedule/edit-schedule/:id', name: 'Edit Schedule', element: EditSchedule },

  { path: '/cinema/list-cinema', name: 'Cinema', element: ListCinema },
  { path: '/cinema/add-new-cinema', name: 'Add New Cinema', element: AddNewCinema },
  { path: '/cinema/cinema-detail/:id', name: 'Cinema Detail', element: CinemaDetail },
  { path: '/cinema/edit-cinema/:id', name: 'Edit Cinema', element: CinemaEdit },
  { path: '/cinema/list-room', name: 'List Room', element: ListRoom },
]

export default routes
