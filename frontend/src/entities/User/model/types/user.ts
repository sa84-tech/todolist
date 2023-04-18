export interface User {
    id: string;
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
}

export interface UserSchema {
    authData?: User;
}
