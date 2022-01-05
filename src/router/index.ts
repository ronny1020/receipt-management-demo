import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () =>
      import('@/modules/invoices/views/invoiceList/InvoiceList.vue'),
  },
  {
    path: '/create-invoice',
    component: () =>
      import('@/modules/invoices/views/createInvoice/CreateInvoice.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
