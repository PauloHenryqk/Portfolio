import styled from "styled-components"

export const FooterStyle = styled.footer`
    footer {
       margin-top: 3rem;
       color: white;
       border-top: 1px solid #dbdcde;
       background-color: #616266;
    }

    .contact {
       width: 80vw;
       margin: auto;
       padding: 3rem;
       display: grid;
       justify-content: center;
       align-items: center;
       gap: .6rem;
    }

    .contact div {
       display: flex;
       flex-direction: column;
    }

    .contact input {
       width: 18.7rem;
       height: 3rem;
       padding: .6rem;
       outline: none;
       display: inline-block;
       border: none;
       border-radius: .3rem;
    }

    textarea {
       padding: .6rem;
       outline: none;
       border: none;
       border-radius: .3rem;
    }

    .contact #btn {
       width: 9.3rem;
       height: 3rem;
       color: red;
       border: none;
       border-radius: 1.2rem;
       cursor: pointer;
    }

    #phrase {
       text-align: center;
       padding: .9rem;
       color: white;
       font-weight: bold;
    }

   #area-hidden {
      position: absolute;
      left: -5000px;
   }
`;