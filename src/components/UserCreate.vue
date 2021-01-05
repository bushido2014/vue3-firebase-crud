<template>
  <div class="max-w-md mx-auto my-3">
    <form @submit.prevent="onSubmit">
      <div class="form-group py-3">
        <label class="py-2 block">Name</label>
        <input v-model="form.name" required class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <div class="py-3">
        <label class="py-2 block">Email</label>
        <input
          v-model="form.email"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="email"
          required
        />
      </div>

      <button type="submit" class="my-4 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Create User
      </button>
    </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from 'vue'
export default {
  setup() {
    const form = reactive({ name: '', email: '' })
    const onSubmit = async () => {
      await createUser({ ...form })
      form.name = ''
      form.email = ''
    }
    return { form, onSubmit }
  }
}
</script>

<style>

</style>