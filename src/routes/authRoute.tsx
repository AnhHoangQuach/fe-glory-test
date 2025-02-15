import { LoginScreen, RegisterScreen } from 'views/Auth '

const authRoute = {
  login: {
    component: LoginScreen,
    path: '/login',
    url: '/auth/login',
  },
  register: {
    path: '/register',
    url: '/auth/register',
    component: RegisterScreen,
  },
}

export default authRoute
