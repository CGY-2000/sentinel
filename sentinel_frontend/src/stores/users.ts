import {defineStore} from "pinia"
import {reactive, Reactive} from "vue"
import request from "@/utils/request"
import { User } from "@/schemas/users"

type loginResponse = {
    id: number
    username: string
    is_superuser: boolean
    token: string
}

export const useUsersStore = defineStore('users', () => {
    const loginData: Reactive<loginResponse> = reactive({
        id: 0,
        username: '',
        is_superuser: false,
        token: ''
    })

    const login = async (data: {username: string, password: string}) : Promise<boolean> => {
        console.log(data)
        try {
            const response = await request<loginResponse>({
                method: 'POST',
                url: '/api/v1/user/login',
                data,
            })
            Object.assign(loginData, response)
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }

    const query = async () => {
        const response = await request<User[]>({
            method: 'GET',
            url: '/api/v1/user/query'
        })
        return response
    }

    const add = async (data): Promise<User> => {
        console.log(loginData)
        const response = await request<User>({
            method: 'POST',
            url: '/api/v1/user/create',
            data,
            token: loginData.token
        })
        return response
    }

    return {
        login, query, add
    }
})