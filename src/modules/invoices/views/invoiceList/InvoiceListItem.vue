<template>
  <div class="invoice-list-item">
    <div class="invoice-info">
      <span class="invoice-date">{{ date }}</span>
      <Tag
        :type="invoice.label === '驗證中' ? 'danger' : 'primary'"
        :text="invoice.label"
      />
    </div>
    <div class="invoice-content">
      <span class="invoice-description">
        {{ invoice.details?.[0].description || invoice.invNum }}
      </span>
      <span class="invoice-seller">
        {{ invoice.sellerName || '無店家資料' }}
      </span>
    </div>
    <div class="invoice-total">
      {{
        invoice.amount === undefined ? '--' : invoice.amount.toLocaleString()
      }}元
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import moment from 'moment'
import { Invoice } from '../../models/invoice'
import Tag from '@/shared/components/Tag.vue'

interface Props {
  invoice: Invoice
}

const props = defineProps<Props>()

const { invoice } = reactive(props)

const date = computed(() => {
  if (!invoice) {
    return ''
  }

  return moment(invoice.time).format('MM/DD')
})
</script>

<style lang="scss" scoped>
.invoice-list-item {
  display: flex;
  height: 60px;
  border-bottom: 1px solid #e0e0e0;
  background: #fff;
  cursor: pointer;

  .invoice-info {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 51px;

    .invoice-date {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 18px;
      color: #5a5a78;
      font-size: 12px;
      line-height: 18px;
      text-align: center;
    }
  }

  .invoice-content {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;

    .invoice-description {
      color: #37375a;
      font-size: 14px;
      line-height: 21px;
    }

    .invoice-seller {
      color: #999;
      font-size: 10px;
      line-height: 15px;
    }
  }

  .invoice-total {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    padding-right: 10px;
    color: #5a5a78;
    font-size: 14px;
    line-height: 21px;
  }
}
</style>
