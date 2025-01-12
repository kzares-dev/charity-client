

interface UserAuthCredentials {
    email: string;
    password: string
    fullName?: string
}

export async function userLoginAction(formData: UserAuthCredentials) {
    console.log(formData)
}
export async function userRegisterAction(formData: UserAuthCredentials) {
    console.log(formData)
}