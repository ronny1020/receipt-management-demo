import { Invoice, InvoiceDto, InvoiceLabel } from '../models/invoice'

function getInvoiceLabel(invoice: InvoiceDto): InvoiceLabel {
  if (invoice.status === '驗證中') {
    return '驗證中'
  }

  if (invoice.type === 0) {
    return '電子'
  }

  return '載具'
}

function getTotalPrice(invoice: InvoiceDto): number | null {
  if (invoice.details) {
    return invoice.details.reduce(
      (acc, cur) => acc + cur.amount * cur.unitPrice,
      0
    )
  }

  return null
}

export default function getInvoiceFromDto(invoicesDto: InvoiceDto): Invoice {
  return {
    ...invoicesDto,
    label: getInvoiceLabel(invoicesDto),
    totalPrice: getTotalPrice(invoicesDto),
  }
}
