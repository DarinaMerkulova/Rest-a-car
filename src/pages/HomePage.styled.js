import styled from "@emotion/styled";

export const TitleHomePage = styled.h2`
letter-spacing: 2px;
text-align: center;
margin:40px auto;
font-size: 14px;

@media screen and (min-width:480px) {
font-size: 20px;
}
@media screen and (min-width:768px) {
margin:80px auto;
font-size:36px;
}`

export const TextHomePage = styled.p`
font-size: 12px;
width:200px;
margin:0px auto;
letter-spacing: 2px;
@media screen and (min-width:480px) {
    font-size: 16px;
    width:250px;
}
@media screen and (min-width:768px) {
    font-size: 18px;
    width:500px;
}
`