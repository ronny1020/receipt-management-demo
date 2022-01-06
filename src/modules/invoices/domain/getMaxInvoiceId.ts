import { Invoice } from '../models/invoice'

export default function getMaxInvoiceId(invoices: Invoice[]) {
  return Math.max(...invoices.map((invoice) => invoice.id))
}
