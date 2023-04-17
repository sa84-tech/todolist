export interface User {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
}

export interface UserSchema {
    authData?: User;
}
