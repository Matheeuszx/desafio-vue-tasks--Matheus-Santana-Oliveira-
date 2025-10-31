<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 1050">
    <div v-if="visible" class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">{{ title }}</strong>
        <small>agora</small>
        <button type="button" class="btn-close" @click="hide"></button>
      </div>
      <div class="toast-body">{{ message }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
const message = ref('')
const title = ref('')

function show(msg, type = 'info') {
  message.value = msg
  title.value = type === 'success' ? 'Sucesso' : (type === 'warning' ? 'Atenção' : 'Info')
  visible.value = true
  setTimeout(() => visible.value = false, 3000)
}
function hide() { visible.value = false }
defineExpose({ show, hide })
</script>
