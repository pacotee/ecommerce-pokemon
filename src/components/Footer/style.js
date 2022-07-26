import styled from 'styled-components';

export const Main = styled.footer`
    background:var(--theme-color-1);
    width:100%;
    margin-top:40px;
    .max-container{
        display:flex;
        align-items:center;
        justify-content:center;
        height:100px;
    }
    p{
        font-size:25px;
        color:white;
   }
   svg{
       font-size:30px;
       display:inline-block;
       vertical-align:middle;
   }
   @media (max-width:567px){
        .max-container{
            flex-wrap:wrap;
            justify-content:center;
            height:unset;
        }
        p{
            font-size:16px
        }
    }
`;