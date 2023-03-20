import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [forwardRef(() => UserModule), JwtModule.register({
    secret: 'secret',
    signOptions: { expiresIn: '30d' },
  })],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
