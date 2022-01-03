export type InvoiceStatus = '已確認' | '驗證中'

export interface Invoice {
  id: number
  invNum: string
  status: InvoiceStatus
  type: number
  time: string
  amount?: number
  sellerName?: string
  details?: InvoiceDetail[]
}

export interface InvoiceDetail {
  description: string
  quantity: number
  unitPrice: number
  amount: number
}
