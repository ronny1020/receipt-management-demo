<template>
  <div v-if="openedInvoice" class="lightbox-wrapper">
    <div class="lightbox">
      <IconBase
        width="40"
        height="40"
        icon-color="#ffffff"
        class="close-icon"
        icon-name="CloseIcon"
        @click="closeInvoiceDetail"
      >
        <CloseIcon />
      </IconBase>
      <div class="lightbox-header">a</div>
      <div class="lightbox-table">a</div>
      <div class="lightbox-footer">
        <span>總金額</span>
        <span>{{ openedInvoice.totalPrice?.toLocaleString() || '--' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useInvoicesStore from '../../store/invoiceStore'
import CloseIcon from '@/shared/components/icons/CloseIcon.vue'
import IconBase from '@/shared/components/icons/IconBase.vue'

const invoicesStore = useInvoicesStore()
const { openedInvoice } = storeToRefs(invoicesStore)

function closeInvoiceDetail(): void {
  invoicesStore.closeInvoiceDetail()
}
</script>

<style lang="scss" scoped>
.lightbox-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #37375a;
  opacity: 0.9;

  .lightbox {
    position: relative;
    display: grid;
    grid-auto-rows: 90px 1fr 50px;
    width: 340px;
    height: 500px;
    border-radius: 20px;
    background: #fff;

    .close-icon {
      position: absolute;
      top: -40px;
      right: 10px;
      cursor: pointer;
    }

    .lightbox-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 22.5px;
      color: #999;
      box-shadow: 0 -1px 0 #e0e0e0;
      font-size: 12px;
      line-height: 18px;
    }
  }
}
</style>
