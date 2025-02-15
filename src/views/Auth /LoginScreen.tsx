import { Button, Container, Paper, TextField } from '@mui/material'
import { InputPassword } from 'components'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { authRoute } from 'routes'

type LoginFormValues = {
  password: string
  phone: string
}

const LoginScreen = () => {
  const { control } = useForm<LoginFormValues>()

  return (
    <Container maxWidth="sm">
      <Paper className="flex flex-col gap-10 p-8">
        <Controller
          name="phone"
          control={control}
          rules={{
            required: 'Số điện thoại không được để trống',
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              variant="standard"
              label="Số điện thoại"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Mật khẩu không được để trống',
          }}
          render={({ field, fieldState: { error } }) => (
            <InputPassword
              {...field}
              fullWidth
              variant="standard"
              label="Mật khẩu"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={() => {}}
        >
          Đăng nhập
        </Button>

        <div className="flex justify-center space-x-2 mt-[-20px]">
          <span>Bạn chưa có tài khoản?</span>
          <Link className="font-medium hover:text-primary-main" to={authRoute.register.url}>
            Đăng ký
          </Link>
        </div>
      </Paper>
    </Container>
  )
}

export default LoginScreen
