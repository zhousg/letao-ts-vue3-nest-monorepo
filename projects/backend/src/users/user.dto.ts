import {
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Validate,
} from 'class-validator'

export class LoginUserDto {
  @IsNotEmpty({ message: '用户名不能是空' })
  @IsString({ message: '用户名必须是字符串' })
  username: string

  @IsNotEmpty({ message: '密码不能是空' })
  @IsString({ message: '密码必须是字符串' })
  @IsStrongPassword(undefined, { message: '密码不能太简单' })
  password: string
}

export class RegisterUserDto extends LoginUserDto {
  @IsNotEmpty({ message: '手机号不能是空' })
  @IsString({ message: '手机号必须是字符串' })
  @Validate(
    (value: string) => {
      return /^1[3-9]\d{9}$/.test(value)
    },
    { message: '手机号格式不对' }
  )
  mobile: string
}

export class UserDto extends LoginUserDto {
  id: number
}
