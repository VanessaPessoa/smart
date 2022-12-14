import { Skeleton } from "@mui/material";
import { useStyles } from "./style"

export default function SectionLoadingScreen() {
    const classes = useStyles();

    return (
        <div className={classes.boxWithSkeleton}>
            <div className={classes.menuSkeleton}>
                <Skeleton variant="rectangular" height={"100%"} width="85%" animation="wave" />

            </div>
            <div className={classes.childrenSkeleton}>
               <Skeleton variant="rounded" height={300} animation="wave" />
               <div className={classes.listSkeleton}>
                   <Skeleton variant="rectangular" height={400} animation="wave" />
                </div>
            </div>
        </div>
    )
}