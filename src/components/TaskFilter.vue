<template>
  <div class="flex justify-center gap-4 my-4">
    <button 
      v-for="type in filters"
      :key="type"
      :class="[
        'px-3 py-1 rounded-lg border',
        store.filter === type ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
      ]"
      @click="store.setFilter(type)"
    >
      {{ labels[type] }}
    </button>
  </div>
</template>

<script setup>
import { useTasksStore } from '../stores/tasks'

const store = useTasksStore()
const filters = ['all', 'completed', 'pending']
const labels = {
  all: 'Todas',
  completed: 'Concluídas',
  pending: 'Pendentes'
}
</script>
