import { defineStore } from 'pinia'
import { Invoice } from '../models/invoice'

interface InvoiceStoreState {
  invoices: Invoice[]
}

const useInvoicesStore = defineStore('invoiceStore', {
  state: (): InvoiceStoreState => ({
    invoices: [],
  }),
  actions: {
    setInvoices(invoice: Invoice[]) {
      this.invoices = invoice
    },
  },
})

export default useInvoicesStore
