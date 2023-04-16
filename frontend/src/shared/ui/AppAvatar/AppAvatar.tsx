import { generateColorFromString } from '@/shared/lib/colors/generateColorFromString';
import { Avatar, Stack } from '@mui/material';

interface AvatarProps {
    firstName: string;
    lastName: string;
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
    const { firstName, lastName } = props;

    return (
        <Stack direction='row' spacing={2}>
            <Avatar
                {...getAvatarProps(
                    firstName.toUpperCase(),
                    lastName.toLocaleUpperCase()
                )}
            />
        </Stack>
    );
};

export default AppAvatar;
