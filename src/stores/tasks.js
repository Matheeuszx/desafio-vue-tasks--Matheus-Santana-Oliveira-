import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  // Estado reativo
  const tasks = ref(JSON.parse(localStorage.getItem('tasks') || '[]'))
  const filter = ref('all')

  // Getter reativo
  const filteredTasks = computed(() => {
    if (filter.value === 'completed') return tasks.value.filter(t => t.is_completed)
    if (filter.value === 'pending') return tasks.value.filter(t => !t.is_completed)
    return tasks.value
  })

  // Salvar automaticamente no localStorage
  watch(tasks, (newVal) => {
    localStorage.setItem('tasks', JSON.stringify(newVal))
  }, { deep: true })

  // Ações
  const addTask = (task) => {
    task.id = Date.now()
    task.is_completed = false
    tasks.value.push(task)
  }

  const editTask = (updatedTask) => {
    const index = tasks.value.findIndex(t => t.id === updatedTask.id)
    if (index !== -1) {
      tasks.value[index] = { ...updatedTask }
    }
  }

  const removeTask = (id) => {
    tasks.value = tasks.value.filter(t => t.id !== id)
  }

  const toggleCompleted = (id) => {
    const task = tasks.value.find(t => t.id === id)
    if (task) task.is_completed = !task.is_completed
  }

  const setFilter = (value) => {
    filter.value = value
  }

  return { tasks, filter, filteredTasks, addTask, editTask, removeTask, toggleCompleted, setFilter }
})
