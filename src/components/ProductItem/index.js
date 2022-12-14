import { Card, CardContent, Button, Chip } from "@mui/material"
import Image from 'mui-image';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useStyles } from "./style"
import { LocationOn } from "@mui/icons-material";


export default function ProductItem({ title, imgUrl, price, onClick, address, label}) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Image
                    src={imgUrl}
                    alt=""
                    fit="contain"
                    height="150px"
                    width="200px"
                    distance="10px"
                />
                <p className={classes.title}> {title} </p>
                
                {price && <Chip
                    className={classes.chip}
                    icon={<AttachMoneyIcon />}
                    label={price}/>
                }

                {address && 
                    <span className={classes.location}> 
                        <LocationOn />  {address} 
                     </span>
                }

                <Button 
                    size="small" 
                    variant="text"
                    onClick={onClick}>
                    {label}
                </Button>

            </CardContent>
        </Card>
    )
}