import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const StyleProfile = styled.p`
    color: black;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    padding-left: 10px;
`;
const Alltext=styled.div`
    margin-right: 100px;
    margin-left: 100px;
    padding-top: 30px;
    padding-bottom: 30px;
    
`;
const ProfilePic=styled.img`
    width:100px;
    border-radius: 50%;
    overflow: hidden;  /*넘치는 부분 지움 */
    float:left

    
`;
const Text=styled.p`
 margin: 0;
 font-size: 14px;
`;

const Back=styled.div`
background-color: rgb(156, 156, 156);
margin: 0 0 10px 0;
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

const Mbox=styled.div`
background-color: white;
height: 100%;
margin: auto;
width: 750px;

`;

const CBack=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
flex: 1 1 30%;
flex-direction: row;
`;

const One=styled.div`
width: 200px;
  height: 250px;
  flex-direction: column;
    justify-content: start;
    margin: 5px;
    cursor: pointer;
    overflow: hidden;
`;

const BoxEach = styled.img`
  display: inline-block;
  width: 200px;
  height: 202px;
  display: flex;
    justify-content: center;
    align-items: center;
`;

const CTitle=styled.p`
color: black;
font-size: 18px;
font-weight: 700;
margin: 0;
`;

const CText=styled.p`
    color: rgb(156, 156, 156);
    font-size: 1rem;
    font-weight: normal;
    margin: 0;
`;


const BoxText =styled.div`
  border-radius: 5px;
background-color: transparent;
width: 350px; height: 220px;
color: black;
display: flex;
justify-content: center;
align-items: center;

`;

const Components = () => {
    const [peed, Setpeed] = useState([]);
    const [num, Setnum] = useState();

    useEffect (() =>{
        axios
        .get(`https://gallery.jmoomin.com/imageAll`)
        .then((res)=>{
            console.log(res);
            Setpeed(res.data); /* 피드 정보를 불러옴 */
        });
    },[]);

    const Num = () =>{
      axios
      .get(`https://gallery.jmoomin.com/imageSize`)
      .then((res)=>{
        Setnum(res.data);
      })
    }
    return ( 
    <>
    <Num/>
    <Back>
        <Mbox>
      <Alltext>
      <ProfilePic src='/냐옹.jpg'></ProfilePic>
      <StyleProfile>likelion_11th_frontend </StyleProfile>
     <Text>멋쟁이사자처럼 11기 여러분의 소중한 추억들을 보관합니다.😎</Text>
     <p>게시물 {num}개</p>
     </Alltext>
     <CBack>
      {peed.map((element)=>{
        return (
          <One>
          <Link to ={`/article/${element.id}`}>
          <BoxEach src={element.imageURL}/></Link>
          <CTitle>{element.imageName}</CTitle>
          <CText>{element.imageText}</CText>
          </One>
      )
        })}
        </CBack>
     </Mbox>
     </Back>
        </>
    );
};

export default Components;