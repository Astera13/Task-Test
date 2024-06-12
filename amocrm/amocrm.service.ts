import axios from 'axios';

export class AmoCRMService {
  private baseURL = 'https://dzinchenko568.amocrm.ru/api/v4';

  async getLeads(query: string = '') {
    try {
      const response = await axios.get(`${this.baseURL}/leads`, {
        params: { query },
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJjYzI4MmYxZWY4YTdlM2FjN2FiM2U5ZTk0ZjlhOTUzYjliZGU1NTU4YzY1NTYzOWMyMDZmMzY3ZThhZmE1N2Y5N2YzMGM5ZTc3MWIzNGZiIn0.eyJhdWQiOiJjZGQzNGUyNS1hN2MxLTRkZmYtOGFkNC1mNWRiNTQyMjZhMzkiLCJqdGkiOiIyY2MyODJmMWVmOGE3ZTNhYzdhYjNlOWU5NGY5YTk1M2I5YmRlNTU1OGM2NTU2MzljMjA2ZjM2N2U4YWZhNTdmOTdmMzBjOWU3NzFiMzRmYiIsImlhdCI6MTcxODIxODgwMCwibmJmIjoxNzE4MjE4ODAwLCJleHAiOjE3MTk5NjQ4MDAsInN1YiI6IjExMTUxOTM0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNzk3MTg2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNTMxZDY4ZGUtYjE3OC00MGRmLWE4MWYtYzZmMGIzYjgyZTc0In0.GJyLyj_PEI25_nPDgK0aqU7-oeYhMGKlcx5K8nuexkDzmPUQRwOrAhxLsDfQhFqyY1IuowjchC8brLRUiNLVU9xtsjpnZL7kP-olwwEaMd1veF-saeRBZDRPON_4ywWfhgZJi-OBL4_qrGqaDCMO6lyuV9gXphKuYeBY1D8b3IUZa8tI69ZKePh1GONJQ_GsoXiKVXOvQSxlGvfcwMwZ5pEeAc2cOwnXyeVPR84iWdatxrYiRcN28NjEl4vsJaA0QgV9HWlMPGvRdIPDZHjxcqzoD42ITyhIum9DNoY4j9wRRTg_r4NEBZvHwNuFUveqoJ0cpRiyOOLe5-5FgdA8Hg`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}