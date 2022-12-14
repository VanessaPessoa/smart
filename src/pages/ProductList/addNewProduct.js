import React from  "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {  Button } from "../../components";

import { useNavigate } from "react-router-dom";


export default function AddNewProduct() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/add-product")
    };

    return (
        <div>
            <Button
                ariaLabel="adionar novo produto"
                title="Adicione novo produto"
                onClick={handleClick}
                icon={<AddCircleOutlineOutlinedIcon />}
                variant="outlined" />
        </div>
    )
}