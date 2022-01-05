<template>
  <div class="background">
    <header>
      <IconBase
        width="167"
        height="41"
        icon-color="#37375A"
        icon-name="MainLogo"
      >
        <MainLogo />
      </IconBase>
    </header>

    <div class="description">
      <span class="title">110年12月</span>
      <span class="subtitle">
        共 {{ invoiceNumber.toLocaleString() }} 張 , 總金額
        {{ sumOfTotalPrice.toLocaleString() }} 元
      </span>
    </div>

    <InvoiceListItem
      v-for="(invoice, index) of invoices"
      :key="invoice.id"
      :invoice="invoice"
      @click="openInvoiceDetail(index)"
    />
  </div>

  <InvoiceDetail />
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import InvoiceDetail from './InvoiceDetail.vue'
import InvoiceListItem from './InvoiceListItem.vue'
import { initInvoices } from '../../application/initInvoices'
import useInvoicesStore from '../../store/invoiceStore'
import IconBase from '@/shared/components/icons/IconBase.vue'
import MainLogo from '@/shared/components/icons/MainLogo.vue'

const invoicesStore = useInvoicesStore()
const { invoices } = storeToRefs(invoicesStore)
onMounted(() => {
  void initInvoices()
})

const invoiceNumber = computed((): number => invoices.value.length)

const sumOfTotalPrice = computed((): number =>
  invoices.value.reduce((total, invoice) => total + (invoice.amount || 0), 0)
)

function openInvoiceDetail(index: number): void {
  invoicesStore.openInvoiceDetail(index)
}
</script>

<style lang="scss" scoped>
.background {
  min-height: 100vh;
  background: #f5f5f5;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  background: var(--primary-color);
}

.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
  border-bottom: 1px solid #e0e0e0;
  background: #fff;

  .title {
    color: #37375a;
    font-weight: bold;
    font-style: normal;
    font-size: 18px;
    line-height: 27px;
  }

  .subtitle {
    color: #51519b;
    font-size: 14px;
    line-height: 21px;
  }
}
</style>
