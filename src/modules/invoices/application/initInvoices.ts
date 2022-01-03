import { getInvoices } from '../services/api'
import useInvoicesStore from '../store/invoiceStore'

export async function initInvoices(): Promise<void> {
  const invoices = await getInvoices()
  const invoicesStore = useInvoicesStore()

  invoicesStore.setInvoices(invoices)
}
