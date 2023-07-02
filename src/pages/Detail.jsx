import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const articlePic=styled.img`
    width:100px;
    overflow: hidden;  /*넘치는 부분 지움 */
`;


const Detail = () => {
    const [peed, Setpeed] =useState();

    useEffect(()=>{
        useEffect (() =>{
            axios
            .get(`https://gallery.jmoomin.com/imageAll`)
            .then((res)=>{
                console.log(res);
                Setpeed(res.data); /* 피드 정보를 불러옴 */
            });
        },[]);

    return (
        <div>
            
        </div>
    );
};

export default Detail;