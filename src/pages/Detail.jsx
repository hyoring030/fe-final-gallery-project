import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const ArticlePic = styled.img`
height: 600px;
    width:600px;
    overflow: hidden;  /*넘치는 부분 지움 */ 
    display:flex;
    justify-content: center;
    margin : 0 auto;
`;
const Title=styled.h2`
    color: black;
    margin: 0;
    margin-left: 10%;
`;
const Comment=styled.div`
    color: rgb(38, 38, 38);
    font-size: 1rem;
    font-weight: normal;
    margin: 0;
    margin-left: 10%;

    
`;
const Line=styled.div`
display: flex;
justify-content: space-between;
margin: 15px;

`;
const Delbutton=styled.button`
display: flex;
justify-content: space-between;
background-color: transparent;
border-color: transparent;
margin-right: 10%;
color: #4f4f4f;
`;
const Postbutton=styled.button`
display: flex;
justify-content: space-between;
color: #11329c;
height:50px;
width: 100px;
background-color: transparent;
border-color: transparent;
align-items:center; 
`;
const Back=styled.div`
background-color: rgb(156, 156, 156);
margin: 0 0 10px 0;
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const Mbox=styled.div`
background-color: white;
height: 100%;
margin: auto;
width: 750px;

`;

const Writemsg=styled.div`
display: flex;
`;
const InputBox=styled.input`
margin-left: 10%;
width: 550px;
border-color: transparent;
`;
const Detail = () => {
    const [peed, Setpeed] =useState();
    const [cmt, Setcomment] =useState([]);
    const { articleId } = useParams();
    const [commentBody, Setcmt]=useState("");
    const navigate=useNavigate();
    const [data, setdata] =useState([]);


    useEffect (() =>{
        axios
        .get(`https://gallery.jmoomin.com/imageAll`)
        .then((res)=>{
            console.log(res);
            Setpeed(res.data); /* 피드 정보를 불러옴 */
        });
    },[]);

    useEffect(()=>{
        axios
        .get(`https://gallery.jmoomin.com/${articleId}/comments`)
        .then((res)=>{
            console.log(res);
            Setcomment(res.data);
            })
            .catch((e)=>{
                console.log(e);
                alert(e);
            });
    },[]);

    const handlecomment = (e) => {
        Setcmt(e.target.value);
    }


    const deletemsg = (id) => {
        axios
        .delete(`https://gallery.jmoomin.com/${articleId}/comments/${id}`)
        .then(()=>{
            navigate(0);
        })
    }

    const HandleCmt =()=>{
        axios
        .post(`https://gallery.jmoomin.com/${articleId}/comments`,{commentBody})
        .then((res)=>{
            console.log(res);
            navigate(0);
        })
        .catch((e)=>{
            console.log(e);
            alert(e);
        });
    };

    useEffect(() => {
        axios.get(`https://gallery.jmoomin.com/imageAll`)
        .then((res) => {
          setdata(res.data.filter((element) => element.id === `${articleId}`)[0]);
        }, []);
      }, []);

    return (
        <div>
            <Back><Mbox>
            <Title>{data.imageName}</Title>
            <Comment>{data.imageText}</Comment><br/>
            <ArticlePic src={data.imageURL}></ArticlePic>
            <Writemsg>
            <InputBox type="text" placeholder="댓글 작성..." onChange={handlecomment} value={commentBody}></InputBox>
            <Postbutton onClick={HandleCmt} >게시</Postbutton></Writemsg>
            {cmt.map((e)=>{
                   return(
                    <Line>
                   <Comment >익명 {e.commentBody}</Comment>
                   <Delbutton onClick={() => deletemsg(e.id)}>삭제</Delbutton> 
                   </Line>
                   )
            })}
            </Mbox></Back>
        </div>
    );
};


export default Detail;