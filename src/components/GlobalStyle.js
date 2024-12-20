import { createGlobalStyle } from "styled-components";

const GLobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        overflow-y: overlay;
        @media (max-width:1440px){
            font-size:75%;
        }
        @media (max-width: 960px) {
            /* opacity:0; */
        }
    }
    body{
        background:rgb(37, 37, 37);
        font-family:'Inter',sans-serif;

    }
    button{
        font-weight:bold;
        font-size:1.1rem;
        cursor: pointer;
        padding:1rem 2rem;
        border:3px solid purple;
        background:transparent;
        color:white;
        transition:all 0.5s ease;
        font-family:'Inter',sans-serif;
        &:hover{
            background-color:pink;
            color:white;
        }
    }
    h2{
            font-weight:lighter;
            font-size:4rem;
        }
    h3{
            color:white;
        }
    h4{
            font-weight:bold;
            font-size:2rem;
        }
    p{
            padding:3rem 0rem;
            color:#ccc;
            font-size:1.4rem;
            line-height:150%;
        }
    span{
        font-weight:bold;
        color:pink;
    }
    a{
        font-size:1.1rem;
    }
    /* For WebKit browsers */
::-webkit-scrollbar {
  width: 6px; 
}

::-webkit-scrollbar-thumb {
  background-color: #888; 
  border-radius: 3px; 
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555; 
}

/* ::-webkit-scrollbar-track {
  background: #f1f1f1;
} */

`;

export default GLobalStyle;
