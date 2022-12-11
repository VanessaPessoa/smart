import { Skeleton } from "@mui/material";
import { useStyles } from "./style"

export default function ListLoadingScreen({ perPage }) {
    const classes = useStyles();

    const listSkeleton = Array.from({length: 15}, (_, index) => {
        return (
            <div key={index} className={classes.itemSkeleton}>
                <Skeleton variant="rounded" width="100%" height="150px" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
            </div>
        )
      });
      
    const paginationSkeleton = () => {
        return (
            <div className={classes.paginationSkeleton}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
            </div>
        )
    }

    return (
        <div className={classes.boxWithSkeleton}>
            <div className={classes.menuSkeleton}>
                <Skeleton variant="rectangular" height={"100%"} width="85%" animation="wave" />

            </div>
            <div className={classes.childrenSkeleton}>
                {paginationSkeleton()}

                <div className={classes.listSkeleton}>
                    {listSkeleton}
                </div>
                {paginationSkeleton()}

            </div>

        </div>
    )
}