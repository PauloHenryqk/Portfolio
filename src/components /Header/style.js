import styled from "styled-components"

export const HeaderStyle = styled.header `

   height: 85vh;
   background-image: url('./assets/images/background-image1.jpg');
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;

   nav {
      height: 4em;
      display: flex;
      justify-content: right;
      align-items: center;
      gap: .6rem;
      border-bottom: 1px solid #dbdcde;
   
      #socialMedias {
         margin-right: 3.75rem;

         li {
            display: inline;
            list-style: none;
            margin: 10px;

            a ion-icon {
               font-size: 20px;
               color: white;
            }
         }

      }

      #profilePicture {
         position: absolute;
         right: 3rem;
      }

      #profilePicture img {
         width: 2rem;
         border: 1.5px solid #fff;
         border-radius: 50%;
         cursor: pointer;
      }

      #sideShortCut {
         width: 1.8rem;
         height: 1.8rem;
         margin: .6rem;
         float: right;
         color: white;
      }

      aside {
         width: 0px;
         height: 100vh;
         overflow: hidden;
         transition: .5s;
         position: absolute;
         top: 0;
      }

      .sideBar {
         width: 18.7rem;
         height: 100vh;
         transition: .5s;
         font-size: 1.5rem;
         background-color: var(--secondary-color);
      }

      #closeBar {   
         font-size: 2.5rem;
         margin: .9rem 0rem 0rem .9rem;
         color: var(--primary-color);
      }

      aside ul {
         display: flex;
         flex-direction: column;
         align-items: center;
         gap: 1.2rem;
         margin-top: 1.5rem;
      }
  
      aside ul a:visited {
         color: initial;
      }

      aside li {
         list-style: none;
      }
   }

   a {
      text-decoration: none;
      color: var(--primary-color);
   }

   a:visited {
      color: darkred;
   }

   #presentation {
      margin: 1.2rem 0rem 0rem 3rem;
      font-size: 2.5rem;
      color: #d8c7ff;
      font-weight: bold;
   }

   #presentation h1 {
      font-size: 3.5rem;
      background: linear-gradient(to bottom, #9d82ee 33%, #d382ee 33%, #b882ee 34%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   #presentation small {
      display: inline-block;
      max-width: 30em;
      font-size: 1rem;
   }

`;