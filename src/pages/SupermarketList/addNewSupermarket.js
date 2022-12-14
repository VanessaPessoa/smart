import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";


export default function AddNewSupermarket() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/add-supermarket")
    };

    return (
        <div>

            <Button
                ariaLabel="adionar novo produto"
                title="Adicione novo mercado"
                onClick={handleClick}
                icon={<AddCircleOutlineOutlinedIcon />}
                variant="outlined" />
        </div>
    )
}