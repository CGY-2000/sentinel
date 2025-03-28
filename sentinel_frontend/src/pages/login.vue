<script setup lang="ts">
import { reactive } from 'vue';
import {useUsersStore} from '@/stores/users';
import { useRouter } from 'vue-router';

const loginData = reactive({
    username: '',
    password: ''
})
const router = useRouter()
const loginSubmit = async (e: Event) => {
    e.preventDefault()
    const usersStore = useUsersStore()
    // 密码计算SHA256
    const encoder = new TextEncoder()
    const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(loginData.password))
    const hashHex = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    
    const ret = await usersStore.login({username: loginData.username, password: hashHex})
    if (ret) router.push('/admin')
    else console.error('登录失败')
}
</script>

<template>
    <div class="container">
        <div class="login">
            <div>
                <h1>智慧超脑</h1>
            </div>
            <form action="" @submit="loginSubmit">
                <p>
                    <input type="text" name="用户名" placeholder="用户名" v-model="loginData.username">
                </p>
                <p>
                    <input type="password" name="密码" placeholder="密码" v-model="loginData.password">
                    <!-- <i></i>
                    <a href="#">忘记密码</a> -->
                </p>
                <p>
                    <button type="submit">提交</button>
                </p>
            </form>
        </div>
    </div>
</template>


<style scoped>

@media (min-width: 1000px) {
    
    .container .login {
        display: flex;

        padding: 20px;
        background-color: seagreen;
        border-radius: 10px;
    }
}

@media (min-width: 1800px) {
    
    .container .login {
        display: flex;

        padding: 20px;
        background-color: aqua;
        border-radius: 10px;
    }
}

@media (min-width: 2500px) {
    
    .container .login {
        display: flex;

        padding: 20px;
        background-color: rgb(127, 14, 121);
        border-radius: 10px;
    }
}

form {
    background-color: whitesmoke;
    padding: 20px;
    border-radius: 10px;
}

form input {
    border: 0;
    outline: 0;
    padding: 0 20px;
    line-height: 60px;
    border-radius: 10px;
    font-size: medium;
}

form button {
    border: 0;
    background-color: rgb(153, 46, 157);
    color: whitesmoke;
    box-shadow: rgb(153, 46, 157) -2px 7px 12px;
}

form button:focus,
form button:focus-visible {
    outline: 0;
}

input::placeholder {
    color: grey;
}
</style>