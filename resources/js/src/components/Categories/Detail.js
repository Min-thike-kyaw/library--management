import React, { useState,useEffect } from "react";

import { useParams } from 'react-router-dom';
import CategoryApi from "../../Api/CategoryApi";
import RenderBooks from "../RenderBooks"

const Detail = () => {
    const { id } = useParams();
    const [title,setTitle] = useState('')
    useEffect(() => {
        CategoryApi.getOneCategory(id).then((res) => {
          setTitle(res.data.data.name) 
       }) 
    },[])
    console.log(id);
    return <RenderBooks title={"Category - " + title} books={ {targetId: "category_id", idValue: id}}/>
    
}

export default Detail;