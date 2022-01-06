import { CreateInvoiceForm } from '../models/createInvoice'
import { InputtedInvoiceDto } from '../models/invoice'

export default function createInvoiceFormToDto(
  id: number,
  createInvoiceForm: CreateInvoiceForm
): InputtedInvoiceDto {
  const { invoiceAlphabet, invoiceNumber, year, month, day } = createInvoiceForm

  return {
    id,
    invNum: `${invoiceAlphabet}${invoiceNumber}`,
    status: '驗證中',
    time: `${year}-${month}-${day} 00:00:00`,
    type: 1,
  }
}
