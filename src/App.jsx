import { HashRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar'
import AppRoutes from './router/Routes'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-purple-50">
        <NavBar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}
