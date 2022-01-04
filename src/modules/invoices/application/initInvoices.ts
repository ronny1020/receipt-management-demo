import getInvoiceFromDto from '../domain/getInvoicesFromDto'
import { getInvoicesDto } from '../services/api'
import useInvoicesStore from '../store/invoiceStore'

export async function initInvoices(): Promise<void> {
  const invoicesStore = useInvoicesStore()

  const invoicesDto = await getInvoicesDto()
  const invoices = invoicesDto
    .map((invoiceDto) => getInvoiceFromDto(invoiceDto))
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())

  invoicesStore.setInvoices(invoices)
}
