import { Box } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import { authRoute } from 'routes'

const AuthLayout = () => {
  return (
    <main>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
        className="h-screen bg-black/5"
      >
        <Routes>
          {Object.values(authRoute).map(({ component: Element, path }) => (
            <Route element={<Element />} key={path} path={path} />
          ))}
          <Route element={<Navigate to={authRoute.login.url} />} path="*" />
        </Routes>
      </Box>
    </main>
  )
}

export default AuthLayout
