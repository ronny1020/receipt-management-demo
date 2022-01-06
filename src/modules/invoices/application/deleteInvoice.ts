import { initInvoices } from './initInvoices'
import { deleteInvoiceApi } from '../services/api'
import useInvoicesStore from '../store/invoiceStore'

export default async function deleteInvoice(id: number): Promise<void> {
  const invoicesStore = useInvoicesStore()

  try {
    await deleteInvoiceApi(id)
    await initInvoices()
    invoicesStore.closeInvoiceDetail()
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error)
  }
}
