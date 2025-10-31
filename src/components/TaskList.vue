<template>
  <div class="mt-4">
    <transition name="fade">
      <div
        v-if="store.filteredTasks.length === 0"
        class="text-gray-500 text-center"
      >
        Nenhuma tarefa encontrada.
      </div>
    </transition>

    <transition-group name="list" tag="ul">
      <li
        v-for="task in store.filteredTasks"
        :key="task.id"
        class="flex justify-between items-center bg-white p-4 mb-3 rounded-xl shadow hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        <div class="flex items-start gap-3 w-full">
          <input
            type="checkbox"
            :checked="task.is_completed"
            @change="toggle(task.id)"
            class="w-5 h-5 cursor-pointer accent-green-500 mt-1"
          />

          <div class="flex-1 transition-all duration-300">
            <h3
              class="font-semibold text-lg transition-all duration-300"
              :class="{ 'line-through text-gray-400': task.is_completed }"
            >
              {{ task.title }}
            </h3>
            <p
              class="text-sm text-gray-500"
              :class="{ 'text-gray-400': task.is_completed }"
            >
              {{ task.description }}
            </p>
          </div>
        </div>

        <div class="flex gap-2 ml-3">
          <button
            @click="edit(task)"
            class="text-blue-500 hover:text-blue-700 transition"
          >
            ✏️
          </button>
          <button
            @click="remove(task.id)"
            class="text-red-500 hover:text-red-700 transition"
          >
            🗑️
          </button>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTasksStore } from '../stores/tasks'
import { useToast } from "vue-toastification"

const store = useTasksStore()
const toast = useToast()
let formComponent = null

onMounted(() => {
  formComponent = document.querySelector("form").__vueParentComponent.exposed
})

const toggle = (id) => {
  store.toggleCompleted(id)
  toast.info("Status da tarefa alterado!")
}

const remove = (id) => {
  store.removeTask(id)
  toast.success("Tarefa removida!")
}

const edit = (task) => {
  if (formComponent && formComponent.setEditTask) {
    formComponent.setEditTask(task)
  } else {
    toast.error("Erro ao tentar editar tarefa.")
  }
}
</script>

<style scoped>
/* Transição de fade ao mostrar/ocultar */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animação de entrada/saída das tarefas */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
