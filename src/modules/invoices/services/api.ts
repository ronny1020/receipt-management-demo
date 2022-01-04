import { Invoice } from '../models/invoice'
import { apiGet } from '@/shared/services/baseApi'

export async function getInvoices(): Promise<Invoice[]> {
  return apiGet<Invoice[]>('/invoices')
}
