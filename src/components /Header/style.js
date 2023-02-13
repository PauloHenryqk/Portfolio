import styled from "styled-components"

export const HeaderStyle = styled.header `
   color: #9350DE;

   height: 85vh;
   transition: .5s;
   background-image: url('../../assets/images/background-image1.jpg');
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
   }

   #socialMedias {
      margin-right: 3.75rem;
   }

   #socialMedias li {
      display: inline;
   }
   
   a {
      text-decoration: none;
      color: var(--primary-color);
   }

   a:visited {
      color: darkred;
   }

   .socialMediasIcon {
      width: 1.8rem;
      height: 1.8rem;
      color: white;
      margin: .6rem;
   }
   
   #profilePicture {
      position: absolute;  
      right: 3rem;
   }

   #profilePicture img {
      width: 1.8rem;
      border: 2px solid #fff;
      border-radius: 50%;
      cursor: pointer;
   }

   #sideShortCut {
      width: 1.8rem;
      height: 1.8rem;
      margin: .6rem;
      float: right;
      color: #5B17B7;
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

`;