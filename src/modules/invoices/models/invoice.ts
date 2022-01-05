export type InvoiceStatus = '已確認' | '驗證中'

export interface InvoiceDto {
  id: number
  invNum: string
  status: InvoiceStatus
  type: number
  time: string
  amount?: number
  sellerName?: string
  details?: InvoiceDetails[]
}

export interface InvoiceDetails {
  description: string
  quantity: number
  unitPrice: number
  amount: number
}

export type InvoiceLabel = '驗證中' | '電子' | '載具'

export interface Invoice extends InvoiceDto {
  label: InvoiceLabel
}
