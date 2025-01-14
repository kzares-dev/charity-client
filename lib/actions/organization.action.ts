interface OrganizationRegisterCredentials {
    adminEmail: string;
    adminPassword: string;
    adminFullName?: string;
    organizationName: string
    organizationDescription: string
}

export async function organizationRegisterAction(formData: OrganizationRegisterCredentials) {
    console.log(formData)
}