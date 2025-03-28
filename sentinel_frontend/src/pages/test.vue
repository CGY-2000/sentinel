<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { Reactive, Ref } from 'vue';

import axios from 'axios';
import { User } from '@/schemas/users';
import { useUsersStore } from '@/stores/users';

const addData = reactive({
  username: '',
  password: ''
})

const onAddSubmit = async (e: Event) => {
  // 阻止默认事件
  e.preventDefault();
  const usersStore = useUsersStore()
  const data = await usersStore.add(addData)
  console.log(data)
}

const onAddCancel = () => {
  addData.username = ''
  addData.password = ''
}

const deleteData = reactive({
  username: ""
})

const onDeleteSubmit = (e: Event) => {
  e.preventDefault();
  const url = '/api/v1/user/delete'
  axios(url, {
    method: "GET",
    params: {
      username: deleteData.username
    }
  }).then((results) => {
    if (results.status === 200) {
      console.log(results.data);
    } else {
      console.error(results.status, results.data);
    }
  }).catch((error) => {
    console.error(error);
  })
}

const onDeleteCancel = () => {
  deleteData.username = ""
}

const showDatas: Ref<User[]> = ref([])

const onShowClick = async () => {
  const usersStore = useUsersStore()
  const data = await usersStore.query()
  showDatas.value = data
}

const onShowDebugClick = () => {
  console.log(showDatas);
}

</script>

<template>
  <div>
    <div>
      <h1>添加用户</h1>
      <!-- 表单验证 -->
       <form action="" autocomplete="off" @submit="onAddSubmit">
          <input type="text" maxlength="50" minlength="3" required placeholder="admin" v-model="addData.username" autocomplete="off">
          <input type="password" maxlength="50" minlength="5" required placeholder="Admin123" v-model="addData.password" autocomplete="off">
          <button type="submit">提交</button>
          <button type="button" @click="onAddCancel">取消</button>
       </form>
    </div>
    <div>
      <h1>展示用户</h1>
      <div>
        <button type="button" @click="onShowClick">获取数据</button>
        <button type="button" @click="onShowDebugClick">debug</button>
        <div v-for="data in showDatas" :id="data.username">
          <span>{{ data.username }}: {{data.password}}</span>
        </div>
      </div>
    </div>
    <div>
      <h1>删除用户</h1>
      <div>
        <form action="" @submit="onDeleteSubmit">
          <input type="text" maxlength="50" minlength="3" required placeholder="admin" v-model="deleteData.username" autocomplete="off">
          <button type="submit">提交</button>
          <button type="button" @click="onDeleteCancel">取消</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
