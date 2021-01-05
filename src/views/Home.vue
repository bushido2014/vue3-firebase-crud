<template>
  <div class="container mx-auto py-10">
    <user-create></user-create>
    <user-list></user-list>
  </div>
</template>

<script>
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'
export default {
  name: 'Home',
  components: { UserCreate, UserList }
}
</script>

<style>
.container {
    max-width: 1280px;
}

</style>
