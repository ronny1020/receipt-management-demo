<template>
  <header>
    <router-link to="/" class="back-icon">
      <IconBase width="6" height="9" icon-color="#fff" icon-name="BackIcon">
        <BackIcon />
      </IconBase>
    </router-link>
    手動輸入發票
  </header>
  <form class="main" @submit.prevent="handleSubmit">
    <div class="input-title">發票號碼</div>
    <div class="input-group invoice-number-input">
      <InputText
        v-model="invoiceAlphabet"
        placeholder="大寫英文"
        maxlength="2"
      />
      <InputText
        v-model="invoiceNumber"
        placeholder="8碼發票號碼"
        maxlength="8"
      />
    </div>
    <div class="input-title">開立時間</div>
    <div class="input-group invoice-date-input">
      <InputText v-model="year" placeholder="西元年" maxlength="4" />
      <InputText v-model="month" placeholder="月份" maxlength="2" />
      <InputText v-model="day" placeholder="日期" maxlength="2" />
    </div>
    <VButton type="submit" value="提交" class="summit-button" />
  </form>
</template>

<script setup lang="ts">
import FormGroup, { patternValidator } from 'vue-reactive-form'
import { RouterLink } from 'vue-router'
import submitCreateInvoiceForm from '../../application/handleSubmitCreateInvoiceForm'
import { CreateInvoiceForm } from '../../models/createInvoice'
import BackIcon from '@/shared/components/icons/BackIcon.vue'
import IconBase from '@/shared/components/icons/IconBase.vue'
import InputText from '@/shared/components/InputText.vue'
import VButton from '@/shared/components/VButton.vue'

const formGroup = new FormGroup<CreateInvoiceForm>({
  invoiceAlphabet: { validators: [patternValidator(/^[A-Z]{2}$/)] },
  invoiceNumber: { validators: [patternValidator(/^\d{8}$/)] },
  year: { validators: [patternValidator(/^\d{4}$/)] },
  month: { validators: [patternValidator(/^\d{2}$/)] },
  day: { validators: [patternValidator(/^\d{2}$/)] },
})

const { invoiceAlphabet, invoiceNumber, year, month, day } = formGroup.refs
const { valid, values } = formGroup

function handleSubmit(): void {
  if (!valid.value) {
    // eslint-disable-next-line no-alert
    alert('請輸入正確的發票資訊')
    return
  }
  submitCreateInvoiceForm(values.value)
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  background: var(--primary-color);
  color: #37375a;
  font-size: 14px;
  line-height: 21px;
  text-align: center;

  .back-icon {
    position: absolute;
    top: 10px;
    left: 15px;
    padding: 8px;
    line-height: 0;
  }
}

.main {
  display: flex;
  flex-direction: column;
  width: 375px;
  margin: 0 auto;
  padding: 20px 28px;

  .input-title {
    height: 30px;
    color: #5a5a78;
    font-size: 14px;
    line-height: 30px;
  }

  .input-group {
    display: grid;
    grid-gap: 10px;
    padding: 7px 0;
  }

  .invoice-number-input {
    grid-template-columns: 1fr 2fr;
  }

  .invoice-date-input {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .summit-button {
    width: 160px;
    margin: 40px auto;
  }
}
</style>
