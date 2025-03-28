type User = {
    id: number

    username: string
    password: string

    alias: string
    email: string
    phone: string
    wechat: string

    is_superuser: boolean

    created_at: Date
    updated_at: Date
    login_at: Date
}

export type {
    User
}