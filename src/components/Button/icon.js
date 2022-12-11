import { IconButton, Tooltip } from '@mui/material';

export default function Icon({ ariaLabel, onClick, variant, icon, title }) {
    return (
        <Tooltip title={title}>
            <IconButton
                onClick={onClick}
                variant={variant}
                aria-label={ariaLabel}
            >
                {icon}
            </IconButton>
        </Tooltip>
    );

}