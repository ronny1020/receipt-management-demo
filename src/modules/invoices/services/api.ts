import { InvoiceDto } from '../models/invoice'
import { apiGet } from '@/shared/services/baseApi'

export async function getInvoicesDto(): Promise<InvoiceDto[]> {
  return apiGet<InvoiceDto[]>('/invoices')
}
