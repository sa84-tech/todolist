import { generateColorFromString } from '@/shared/lib/colors/generateColorFromString';
import { Avatar, Stack } from '@mui/material';

interface AvatarProps {
    firstName?: string;
    lastName?: string;
    fullName?: string;
}

function getAvatarProps(firstName: string = '', lastName: string = '') {
    return {
        sx: {
            bgcolor: generateColorFromString(firstName + lastName),
        },
        children: firstName[0] + lastName[0],
    };
}

const AppAvatar = (props: AvatarProps) => {
    const { firstName, lastName, fullName } = props;

    let fn = firstName || '';
    let ln = lastName || '';

    if (fullName) {
        fn = fullName.split(' ')[0];
        ln = fullName.split(' ')[1];
    }

    return (
        <Stack direction="row" spacing={2}>
            <Avatar {...getAvatarProps(fn.toUpperCase(), ln.toLocaleUpperCase())} />
        </Stack>
    );
};

export default AppAvatar;
