import {
    Link,
    SxProps,
    TypographyProps
} from '@mui/material';
import { ReactNode, memo } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import './AppLink.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
    variant?: TypographyProps['variant'];
    sx?: SxProps;
}

export const AppLink = memo((props: AppLinkProps) => {
    const { to, className, children, color = 'inherit', ...otherProps } = props;

    props.color;

    return (
        <Link
            className={`AppLink ${className}`}
            component={NavLink}
            to={to}
            color={color}
            underline='hover'
            {...otherProps}
        >
            {children}
        </Link>
    );
});
