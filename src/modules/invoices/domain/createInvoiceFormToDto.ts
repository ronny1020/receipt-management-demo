import { CreateInvoiceForm } from '../models/createInvoice'
import { InputtedInvoiceDto } from '../models/invoice'

export default function createInvoiceFormToDto(
  createInvoiceForm: CreateInvoiceForm
): InputtedInvoiceDto {
  const { invoiceAlphabet, invoiceNumber, year, month, day } = createInvoiceForm

  return {
    // json-server doesn't support id, so we use 0 instead
    id: 0,
    invNum: `${invoiceAlphabet}${invoiceNumber}`,
    status: '驗證中',
    time: `${year}-${month}-${day} 00:00:00`,
    type: 1,
  }
}
