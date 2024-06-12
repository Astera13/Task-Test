import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AmoCRMService } from './amocrm/amocrm.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AmoCRMService],
})
export class AppModule {}