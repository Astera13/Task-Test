import { Controller, Get, Query } from '@nestjs/common';
import { AmoCRMService } from './amocrm/amocrm.service';

@Controller('api/leads')
export class AppController {
  constructor(private readonly amocrmService: AmoCRMService) {}

  @Get()
  async getLeads(@Query('query') query: string): Promise<any> {
    try {
      return await this.amocrmService.getLeads(query);
    } catch (error) {
      throw error;
    }
  }
}