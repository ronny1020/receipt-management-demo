import { apiGet } from '@/shared/services/baseApi'
import { Invoice } from '../models/invoice'

export async function getInvoices(): Promise<Invoice[]> {
  return apiGet<Invoice[]>('/invoices')
}
