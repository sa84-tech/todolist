import { LinkProps, NavLink } from 'react-router-dom';
import { Link, SxProps } from '@mui/material';
import { memo, ReactNode } from 'react';
import './AppLink.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkTheme;
    children?: ReactNode;
    sx?: SxProps;
}

export const AppLink = memo((props: AppLinkProps) => {
    const { to, className, children, variant = 'body2', ...otherProps } = props;

    return (
        <Link
            className={`AppLink ${className}`}
            component={NavLink}
            to={to}
            color='inherit'
            underline='hover'
            {...otherProps}
        >
            {children}
        </Link>
    );
});
