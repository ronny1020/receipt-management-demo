import { defineStore } from 'pinia'
import { Invoice } from '../models/invoice'

interface InvoiceStoreState {
  invoices: Invoice[]
  openedInvoiceIndex: number | null
}

const useInvoicesStore = defineStore('invoiceStore', {
  state: (): InvoiceStoreState => ({
    invoices: [],
    openedInvoiceIndex: null,
  }),
  getters: {
    openedInvoice: (state): Invoice | null =>
      state.openedInvoiceIndex === null
        ? null
        : state.invoices[state.openedInvoiceIndex],
  },
  actions: {
    setInvoices(invoice: Invoice[]) {
      this.invoices = invoice
    },
    openInvoiceDetail(index: number) {
      this.openedInvoiceIndex = index
    },
    closeInvoiceDetail() {
      this.openedInvoiceIndex = null
    },
  },
})

export default useInvoicesStore
