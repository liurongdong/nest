import { IsEmail, IsNotEmpty, IsMobilePhone, isNotEmpty, MinLength } from 'class-validator';
import { ErrorCode } from '../../constants/errcode';
export class CreateUserDto {
  @IsNotEmpty({
    message: 'openid不能为空'
  })
  openid: string;
  @IsMobilePhone('zh-CN', {
    strictMode: false
  }, {
    message: '无效手机号',
    context: {
      errorCode: ErrorCode.InvalidPhone.CODE
    }
  })
  @MinLength(1, {
    message: 'geetest_challenge不能为空',
  })

  readonly tel: string;
}
