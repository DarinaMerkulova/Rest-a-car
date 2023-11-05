import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

export const Cardwrapper = styled.div`
width:274px;
height: 426px;
position:relative;
`

export const CarImageWrapper = styled.div`
width:100%;
height:268px;
margin-bottom:14px;
background-size: auto;
`

export const CarImage = styled.img`
display:block;
width:100%;
height:268px;

border-radius:14px;
`
export const CardTitleWrapper = styled.div`
display:flex;
align-items: center;
justify-content:space-between;
margin-bottom: 8px;
font-size:16px;
line-height:1.6;
`
export const CardTitleName= styled.h2`
font-size:16px;
font-weight: inherit;


`

export const ModelWrapper = styled.span`
/* color:#3470FF; */
color: rgb(26, 127, 141);`

export const CardListInfo = styled.ul`
display:flex;
margin-bottom:4px;
font-size:12px;
line-height:1.5;


`

export const CardItemInfo = styled.li`
/* color:rgba(18, 20, 23, 0.5); */
padding: 0 6px;
border-right: 1px solid rgb(26, 127, 141);
&:last-child {
    border-right: none;}
/* border-right: 1px solid rgba(18, 20, 23, 0.1); */
`

export const CardInfoWrapper = styled.div`
margin-bottom: 28px;`

export const HeartBtn = styled.button`
background-color: transparent;
border:none;
width:18px;
height:18px;
position:absolute;
top:14px;
right:14px;
cursor: pointer;


 
`

export const HeartSvg =styled(AiOutlineHeart)`
width:18px;
height:18px;
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
fill: rgb(255, 255, 255);
`

export const FilledHeartSvg =styled(AiFillHeart)`
width:18px;
height:18px;
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
fill: rgb(26, 127, 141);
`