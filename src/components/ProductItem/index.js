import { Card, CardContent, Button, Chip } from "@mui/material"
import Image from 'mui-image';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useStyles } from "./style"


export default function ProductItem({ title, imgUrl, price }) {
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
                {!price && <Chip
                    className={classes.chip}
                    icon={<AttachMoneyIcon />}
                    label={20}/>
                }
                <Button size="small" variant="text">
                    Ver produto
                </Button>

            </CardContent>
        </Card>
    )
}