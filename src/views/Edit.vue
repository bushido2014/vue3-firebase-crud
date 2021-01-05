<template>
  <div class="max-w-lg mx-auto  py-10">
    <h3 class="font-bold py-3 text-xl text-indigo-700">Edit users</h3>
    <form @submit.prevent="update" class="form-users border shadow-md rounded-md p-4">
      <div class="py-6">
        <label>Name</label>
        <input v-model="form.name" class="" required />
      </div>

      <div class="py-6">
        <label>Email</label>
        <input
          v-model="form.email"
          class=""
          type="email"
          required
        />
      </div>

      <button type="submit" class="my-4 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUser, updateUser } from '@/firebase'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)
    const form = reactive({ name: '', email: '' })
    onMounted(async () => {
      const user = await getUser(userId.value)
      console.log(user, userId.value)
      form.name = user.name
      form.email = user.email
    })
    const update = async () => {
      await updateUser(userId.value, { ...form })
      router.push('/')
      form.name = ''
      form.email = ''
    }
    return { form, update }
  }
}
</script>

<style>
.form-users 
 input {
   @apply w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out;
 }
.form-users label {
  @apply py-2 block;
}
</style>