import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1)
    }, 1500)
  }, [])
  return (
    <>
      <h3>404</h3>
      <p>Page not found.</p>
    </>
  )
}

export default Error404;