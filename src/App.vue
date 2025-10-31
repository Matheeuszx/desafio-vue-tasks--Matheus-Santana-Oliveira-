<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-3xl font-bold text-center mb-6">📝 Vue Tasks</h1>
    <TaskForm />
    <TaskFilters />
    <TaskList />
  </div>
</template>



<script setup>
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import TaskFilters from './components/TaskFilter.vue'
</script>
