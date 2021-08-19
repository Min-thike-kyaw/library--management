import React, { useState,useEffect } from "react";

import { useParams } from 'react-router-dom';
import AuthorApi from "../../Api/AuthorApi";
import RenderBooks from "../RenderBooks"

const Detail = () => {
    const { id } = useParams();
    const [title,setTitle] = useState('')
    useEffect(() => {
        AuthorApi.getOneAuthor(id).then((res) => {
          setTitle(res.data.data.name) 
       }) 
    },[])
    
    return <RenderBooks title={"Author - " + title} books={ {targetId: "author_id", idValue: id}}/>
    
}

export default Detail;