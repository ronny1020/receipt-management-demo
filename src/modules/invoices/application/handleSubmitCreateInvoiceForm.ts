import createInvoiceFormToDto from '../domain/createInvoiceFormToDto'
import getMaxInvoiceId from '../domain/getMaxInvoiceId'
import { CreateInvoiceForm } from '../models/createInvoice'
import { postInvoicesDto } from '../services/api'
import useInvoicesStore from '../store/invoiceStore'

export default function submitCreateInvoiceForm(
  form: CreateInvoiceForm
): Promise<void> {
  const invoicesStore = useInvoicesStore()

  const maxInvoiceId = getMaxInvoiceId(invoicesStore.invoices)
  const body = createInvoiceFormToDto(maxInvoiceId + 1, form)

  return postInvoicesDto(body)
}
