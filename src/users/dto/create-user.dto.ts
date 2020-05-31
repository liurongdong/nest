import { IsEmail, IsNotEmpty, IsMobilePhone } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  openid: string;
  @IsMobilePhone('zh-CN', {
    message: '无效的手机号',
    context: {
      errorCode: ErrorCode.InvalidPhone.CODE,
    },
  })
  readonly tel: string;
}
