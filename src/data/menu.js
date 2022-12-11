import StorefrontIcon from '@mui/icons-material/Storefront';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import TapasOutlinedIcon from '@mui/icons-material/TapasOutlined';

export const menuLoggedIn = [
    { "title": "Mercados", "icon": <StorefrontIcon />, "url": "/" },
    { "title": "Produtos", "icon": <TapasOutlinedIcon />, "url": "/products" },
    { "title": "Perfil", "icon": <PermIdentityIcon />, "url": "/profile" },
    { "title": "Sair", "icon": <LogoutIcon />, "url": "/logout" },
]

export const menuNotLoggedIn = [
    { "title": "Mercados", "icon": <StorefrontIcon />, "url": "/" },
    { "title": "Produtos", "icon": <TapasOutlinedIcon />, "url": "/products" },
]

