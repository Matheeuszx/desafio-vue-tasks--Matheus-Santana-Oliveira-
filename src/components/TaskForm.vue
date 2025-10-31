<template>
  <div class="p-4 bg-white rounded-xl shadow-md">
    <h2 class="text-xl font-bold mb-2">{{ editing ? "Editar Tarefa" : "Adicionar Tarefa" }}</h2>
    <form @submit.prevent="handleSubmit">
      <input
        v-model="title"
        type="text"
        placeholder="Título"
        class="border p-2 w-full mb-2 rounded"
        required
      />
      <textarea
        v-model="description"
        placeholder="Descrição"
        class="border p-2 w-full mb-2 rounded"
      ></textarea>

      <div class="flex items-center gap-2">
        <button
          type="submit"
          class="px-4 py-2 rounded text-white transition-colors"
          :class="editing ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-500 hover:bg-blue-600'"
        >
          {{ editing ? "Salvar Alterações" : "Adicionar" }}
        </button>

        <button
          v-if="editing"
          @click="cancelEdit"
          type="button"
          class="text-gray-500 hover:underline"
        >
          Cancelar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTasksStore } from '../stores/tasks'
import { useToast } from "vue-toastification"

const toast = useToast()
const store = useTasksStore()

const title = ref('')
const description = ref('')
const editing = ref(false)
const editingTaskId = ref(null)

const handleSubmit = () => {
  if (!title.value.trim()) return toast.error("O título é obrigatório!")

  if (editing.value) {
    store.editTask({
      id: editingTaskId.value,
      title: title.value,
      description: description.value,
      is_completed: store.tasks.find(t => t.id === editingTaskId.value)?.is_completed || false
    })
    toast.success("Tarefa atualizada com sucesso!")
  } else {
    store.addTask({ title: title.value, description: description.value })
    toast.success("Tarefa adicionada!")
  }

  resetForm()
}

const resetForm = () => {
  title.value = ''
  description.value = ''
  editing.value = false
  editingTaskId.value = null
}

const cancelEdit = () => resetForm()

// Função exposta para ser chamada de TaskList.vue
const setEditTask = (task) => {
  title.value = task.title
  description.value = task.description
  editing.value = true
  editingTaskId.value = task.id
}

defineExpose({ setEditTask })
</script>
