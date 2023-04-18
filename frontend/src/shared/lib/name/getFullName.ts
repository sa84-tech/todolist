import { User } from '@/entities/User';

export const getFullName = (user: User) => {
    return `${user.firstName} ${user.lastName}`;
};

export const getUsersString = (users?: User[]) => {
    if (users) {
        const userNames = users.map((user) => (user.fullName
            ? user.fullName
            : getFullName(user)));

        return userNames.join(', ');
    }
    return '';
};
