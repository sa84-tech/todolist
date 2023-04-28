export interface User {
    id: number;
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
}

export interface UserSchema {
    authData?: User;
}
