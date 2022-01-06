import { InputtedInvoiceDto, InvoiceDto } from '../models/invoice'
import { apiGet, apiPost, apiDelete } from '@/shared/services/baseApi'

export function getInvoicesDto(): Promise<InvoiceDto[]> {
  return apiGet<InvoiceDto[]>('/invoices')
}

export function postInvoicesDto(body: InputtedInvoiceDto): Promise<void> {
  return apiPost('/invoices', body)
}

export function deleteInvoiceApi(id: number): Promise<void> {
  return apiDelete(`/invoices/${id}`)
}
