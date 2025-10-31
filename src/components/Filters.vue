<template>
  <div class="btn-group">
    <button :class="btnClass('all')" @click="setFilter('all')">Todas</button>
    <button :class="btnClass('pending')" @click="setFilter('pending')">Pendentes</button>
    <button :class="btnClass('completed')" @click="setFilter('completed')">Concluídas</button>
  </div>
</template>

<script setup>
const props = defineProps({ filter: { type: String, default: 'all' } })
const emit = defineEmits(['update:filter'])
function setFilter(f) { emit('update:filter', f) }
function btnClass(key) { return ['btn', props.filter === key ? 'btn-primary' : 'btn-outline-primary'] }
</script>
