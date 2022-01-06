import { InputtedInvoiceDto, InvoiceDto } from '../models/invoice'
import { apiGet, apiPost } from '@/shared/services/baseApi'

export function getInvoicesDto(): Promise<InvoiceDto[]> {
  return apiGet<InvoiceDto[]>('/invoices')
}

export function postInvoicesDto(body: InputtedInvoiceDto): Promise<void> {
  return apiPost('/invoices', body)
}
