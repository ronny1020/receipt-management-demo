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
      <div class="lightbox-header">
        <Tag
          class="lightbox-tag"
          :type="openedInvoice.label === '驗證中' ? 'danger' : 'primary'"
          :text="openedInvoice.label"
        />
        <div class="lightbox-invoice-number">{{ openedInvoice.invNum }}</div>
        <div class="lightbox-invoice-time">{{ openedInvoice.time }}</div>
        <div class="lightbox-invoice-seller">
          {{
            'sellerName' in openedInvoice
              ? openedInvoice.sellerName
              : '無店家資料'
          }}
        </div>
      </div>

      <div class="lightbox-table-wrapper">
        <table class="lightbox-table">
          <thead>
            <tr>
              <th>品項</th>
              <th>數量</th>
              <th>單價</th>
              <th>小計</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-if="
                !('details' in openedInvoice) || !openedInvoice.details.length
              "
            >
              <td colspan="4" class="empty-details">
                <div>- 沒有明細資料 -</div>
                <div>此張發票可能正在等待店家更新或驗證。</div>
              </td>
            </tr>
            <template v-else>
              <tr
                v-for="(
                  { description, quantity, unitPrice, amount }, index
                ) of openedInvoice.details"
                :key="index"
              >
                <td>{{ description }}</td>
                <td>{{ quantity }}</td>
                <td>{{ unitPrice }}</td>
                <td>{{ amount }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <div class="lightbox-footer">
        <span>總金額</span>
        <span>
          {{
            'amount' in openedInvoice
              ? openedInvoice.amount?.toLocaleString()
              : '--'
          }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useInvoicesStore from '../../store/invoiceStore'
import CloseIcon from '@/shared/components/icons/CloseIcon.vue'
import IconBase from '@/shared/components/icons/IconBase.vue'
import Tag from '@/shared/components/Tag.vue'

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

    .lightbox-header {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      .lightbox-tag {
        position: absolute;
        top: 17px;
        left: 17px;
      }

      .lightbox-invoice-number {
        margin: 10px 0 2px;
        color: #37375a;
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
      }

      .lightbox-invoice-time {
        margin: 2px 0;
        color: #999;
        font-size: 12px;
        line-height: 18px;
      }

      .lightbox-invoice-seller {
        margin: 2px 0;
        color: #5a5a78;
        font-size: 12px;
        line-height: 18px;
      }
    }

    .lightbox-table-wrapper {
      overflow-y: auto;
      padding: 0 10px;

      .lightbox-table {
        width: 100%;
        border-spacing: 0 4px;

        thead {
          background: #f2f2f2;
        }

        tr {
          height: 30px;

          th,
          td {
            width: 50px;
            padding: 0 5px;
            color: #999;
            font-weight: normal;
            font-size: 12px;
            text-align: center;

            &:first-child {
              width: auto;
              text-align: left;
            }
          }
        }

        .empty-details {
          > div {
            margin: 7px 0;
            color: #999;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
          }
        }
      }
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
