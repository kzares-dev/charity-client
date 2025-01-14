interface AdminAuthCredentials {
    email: string;
    password: string;
    fullName?: string;
}

export async function adminLoginAction(formData: AdminAuthCredentials) {
    console.log(formData)
}
export async function adminRegisterAction(formData: AdminAuthCredentials) {
    console.log(formData)
}

