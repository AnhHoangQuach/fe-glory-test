import { Button, Container, Paper, TextField } from '@mui/material'
import { InputPassword } from 'components'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { authRoute } from 'routes'

const RegisterScreen = () => {
  const { control, watch } = useForm({ mode: 'onChange' })
  const { password } = watch()

  return (
    <Container maxWidth="sm">
      <Paper className="flex flex-col gap-10 p-8">
        <Controller
          name="firstName"
          defaultValue=""
          control={control}
          rules={{
            required: 'Tên không được để trống',
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              variant="standard"
              label="Tên"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name="lastName"
          defaultValue=""
          control={control}
          rules={{
            required: 'Họ không được để trống',
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              variant="standard"
              label="Họ"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name="phone"
          defaultValue=""
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
          defaultValue=""
          control={control}
          rules={{
            required: 'Mật khẩu không được để trống',
            minLength: { value: 6, message: 'Mật khẩu có ít nhất 6 ký tự' },
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
        <Controller
          name="passwordConfirm"
          defaultValue=""
          control={control}
          rules={{
            required: 'Mật khẩu không hợp lệ',
            validate: {
              match: (value) => value === password || 'Mật khẩu không khớp',
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <InputPassword
              {...field}
              fullWidth
              variant="standard"
              label="Xác nhận mật khẩu"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />

        <Button fullWidth variant="contained" onClick={() => {}}>
          Đăng ký
        </Button>

        <div className="flex justify-center space-x-2 mt-[-20px]">
          <span>Đã có tài khoản?</span>
          <Link className="font-medium hover:text-primary-main" to={authRoute.login.url}>
            Đăng nhập
          </Link>
        </div>
      </Paper>
    </Container>
  )
}

export default RegisterScreen
