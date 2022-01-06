export type InvoiceStatus = '已確認' | '驗證中'

export type InvoiceDto = ScannedInvoiceDto | InputtedInvoiceDto

export interface ScannedInvoiceDto {
  id: number
  invNum: string
  status: InvoiceStatus
  type: 0
  time: string
  amount: number
  sellerName: string
  details: InvoiceDetails[]
}

export interface InputtedInvoiceDto {
  id: number
  invNum: string
  status: '驗證中'
  type: 1
  time: string
}

export interface InvoiceDetails {
  description: string
  quantity: number
  unitPrice: number
  amount: number
}

export type InvoiceLabel = '驗證中' | '電子' | '載具'

export type Invoice = InvoiceDto & {
  label: InvoiceLabel
}
