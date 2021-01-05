<template>
  <div class="max-w-lg mx-auto  py-10">
      <table class="users-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, email } in users" :key="id">
          <td>{{ name }}</td>
          <td>{{ email }}</td>
          <td class="flex justify-between items-center">
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-edit">
                Edit
              </button>
            </router-link>
            <button class="btn btn-delete" @click="deleteUser(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '@/firebase'
export default {
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  }
}
</script>

<style>
.users-table {
  @apply border-separate border-2 border-gray-500 w-full;
}
.users-table th {
  @apply px-4 py-2 text-left border-2 border-gray-500;
}
.users-table td {
  @apply px-4 py-2 border-2 border-gray-500;
}

.btn {
  @apply px-4 py-2 text-sm;
}

.btn-edit {
  @apply rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700;
}

.btn-delete {
  @apply rounded-md shadow-sm px-4 py-2 bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500;
}
</style>