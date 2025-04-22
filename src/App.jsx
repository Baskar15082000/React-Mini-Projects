import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import MouseAnimation from './components/MouseAnimation'
import LinearTravelAnimation from './components/LinearTravelAnimation'
import ScrollAnimation from './components/ScrollAnimation'
import Card3D from './components/Card3D'
import BorderAnimation from './components/BorderAniamtion'

import './App.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/mouse">Mouse Animation</Link></li>
        <li><Link to="/linear">Linear Travel</Link></li>
        <li><Link to="/scroll">Scroll Animation</Link></li>
        <li><Link to="/card3d">3D Card</Link></li>
        <li><Link to="/border">Border Animation</Link></li>
      </ul>
    </nav>
  )
}

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <button
      style={{
        position: 'absolute',
        top: 20,
        left: 20,
        padding: '2px 6px',
        fontSize: '18px',
        cursor: 'pointer',
        zIndex: 999,
      }}
      onClick={() => navigate('/')}
    >
      ⬅
    </button>
  )
}
const AppRoutes = () => {
  const location = useLocation()
  const animationRoutes = ['/mouse', '/linear', '/scroll', '/card3d', '/border']
  const isAnimationPage = animationRoutes.includes(location.pathname)

  return (
    <>
      {!isAnimationPage && <Navigation />}
      {isAnimationPage && <BackButton />}
      <Routes>
        <Route path="/"/>
        <Route path="/mouse" element={<MouseAnimation />} />
        <Route path="/linear" element={<LinearTravelAnimation />} />
        <Route path="/scroll" element={<ScrollAnimation />} />
        <Route path="/card3d" element={<Card3D />} />
        {/* <Route path="/border" element={<BorderAnimation />} /> */}
      </Routes>
    </>
  )
}

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
)

export default App
