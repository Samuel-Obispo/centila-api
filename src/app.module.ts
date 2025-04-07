/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { RolesModule } from './roles/roles.module';
import { DevicesModule } from './devices/devices.module';
import { GroupsModule } from './groups/groups.module';
import { NotisModule } from './notis/notis.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [
    UserModule,
    RolesModule,
    DevicesModule,
    GroupsModule,
    NotisModule,
    FirebaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
