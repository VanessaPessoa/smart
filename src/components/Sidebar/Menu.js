
import { useNavigate } from 'react-router-dom';
import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material"
import { menuNotLoggedIn } from "../../data/menu"


export function Menu({ props }) {
    const navigate = useNavigate();
    const menu = menuNotLoggedIn;

    const redirect = (url) => {
        navigate(url)
    }

    return (
        <>
            <Toolbar />
            <Divider />
            <List>
                {menu.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => redirect(item.url)}>
                            <ListItemIcon> {item.icon} </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    );
}