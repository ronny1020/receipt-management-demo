import createInvoiceFormToDto from '../domain/createInvoiceFormToDto'
import { CreateInvoiceForm } from '../models/createInvoice'
import { postInvoicesDto } from '../services/api'

export default function submitCreateInvoiceForm(
  form: CreateInvoiceForm
): Promise<void> {
  const body = createInvoiceFormToDto(form)

  return postInvoicesDto(body)
}
