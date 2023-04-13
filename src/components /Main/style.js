import styled from "styled-components"

export const MainStyle = styled.main `
   background-color: #1a1a1a;
   /*overflow: hidden;
   position: relative;*/

   h1 {
      font-size: 2.8rem;
      margin-bottom: .4rem;
   }

   #hardSkills {
      width: 80vw;
      margin: auto;
   }

   h2 {
      font-size: 2rem;
      padding: 3rem;
      text-align: center;
      color: var(--primary-color);
   }

   .techs {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;   

      .cardTech {
         width: 18.7rem;
         height: 18.7rem;
         padding: .6rem;
         border: 1.5px solid #000;
         border-radius: 2rem;
         margin: 1.5rem;
         color: var(--primary-color);

         background-color: #272727;
         box-shadow: 1px 5px 5px #0d0d0d;
      }

      .techName {
         font-size: 1.5rem;
         font-weight: bold;
         text-align: center;
         margin-bottom: 1.2rem;
      }

      .cardTech p {
         font-size: 1.2rem;
      }
   }

   .row2 {
      display: none;
   }

   .studing p {
      width: 100%;
      height: 2rem;
      padding: .4rem;
      font-size: 1rem;
      color: red;
      background-color: #e8f0fd;
      position: relative;
      top: 30%;
      text-align: center;
   }

   #seeMore {
      margin: 1.2rem;
      text-align: center;
      color: gray;
      cursor: pointer;
   }

   #seeMore ion-icon {
      font-size: 20px;
      transform: translate(-3px,5px);
   }

   #certificationsAndDifferences {
      width: 80vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 3.7rem auto;
      color: var(--primary-color);
   }

   #certificationsAndDifferences section {
      width: 28rem;
      margin: 1.2rem;
      border: 1.5px solid #000;
      border-radius: 1.2rem;
      padding: .6rem;
      background-color: #272727;

      box-shadow: 1px 5px 5px #0d0d0d;
   }

   .title {
      font-size: 1.2rem;
      padding: 0rem 0rem .6rem;
   }

   .title + div  {
      display: flex;
      gap: .6rem;
   }

   .title + div img {
      height: 1.8rem;
   }

   #whatIdo {
      width: 80vw;
      margin: 3.7rem auto;
      color: var(--primary-color);
  
      .container {
         display: flex;
         justify-content: space-around;
         flex-wrap: wrap;
      }

      .card {
         width: 12.5rem;
         text-align: center;
         padding: .6rem;
      }

      #imgSchool, #imgCourse, #imgEnglish, #booksImg {
         width: 6.2rem;
         height: 6.2rem;
         border-radius: 50%;
         margin: 0rem auto .6rem;
         overflow: hidden;
         display: flex;
         justify-content: center;
         align-items: center;
         background-color: var(--secondary-color);
         box-shadow: 0px 0px 7px #000;
      }
      
      #imgSchool img {
         width: 3.7rem;
         height: 3.7rem;
      }

      #imgCourse img {
         width: 6.2rem;
         height: 6rem;
      }

      #booksImg img {
         width: 6rem;
         height: 6rem;
         box-shadow: 0px 0px 5px #000;
      }
   }

   #whatIdone {
      width: 100vw;
      gap: 1.2rem;
      color: var(--primary-color);
      padding: 3rem;

      display: grid;
      grid-template-areas: "h2 h2 h2" 
                           "arrL csel arrR";
      justify-content: center;

      h2 {
         grid-area: h2;
      }
   }

   #containerProject {
      width: 50rem;
      height: 21.8rem;
      margin: auto;
      display: flex;
      gap: .9rem;
      flex-flow: row nowrap;
      overflow: auto;
      scroll-behavior: smooth;

      grid-area: csel;
   }

   #containerProject::-webkit-scrollbar {
      display: none;
   }

   #arrowLeft, #arrowRight { 
      width: 3rem;
      height: 3rem;
      color: var(--secondary-color);
      background: linear-gradient( var(--primary-color), violet );
      cursor: pointer;
      border-radius: 50%; 
      opacity: 0.5;
      position: relative;
      top: 9rem;
   }

   #arrowLeft {
      grid-area: arrL;
   }
   #arrowRight {
      grid-area: arrR;
   }

   .arrows:hover {
      color: #dbdcde;
      opacity: 1;
   }

   .projetos {
      width: 12.5rem;
      height: 21.8rem;
      padding: 1.8rem .3rem .3rem;
      flex: none;
      border: 1.5px solid #000;
      border-radius: 1rem;
      position: relative;
                                 
      background-color: var(--secondary-color);
   }

   .projetos div {
      width: 6.2rem;
      height: 6.2rem;
      margin: auto;
      display: flex;
      justify-content: center;
      cursor: pointer;
   }

   .projetos p {
      font-size: 1.2rem;
      margin: .9rem 0rem 0rem;
   }

   .done {
      margin-top: .3rem;
      font-size: .8rem;
      color: gray;
      display: block;
   }

   .linkGithub {
      font-size: 1rem;
      position: absolute;
      bottom: .9rem;
   }

   .seeMoreAtGithub {
      width: 12.5rem;
      height: 21.8rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: none;
      border: 1px solid #dbdcde;
                                 
      background-color: var(--secondary-color);
   }

   .seeMoreAtGithub ion-icon {
      width: 4.3rem;
      height: 4.3rem;
   }

   .seeMoreAtGithub a strong {
      font-size: 1.5rem;
   }

   .material-symbols-outlined {
      font-size: 1rem;
      transform: translate(-3px,20%);
   }

   /*
   .balls {
      width: 10px;
      height: 10px;
      margin: 30px;
      display: inline-block;
      position: relative;

      border-radius: 50%;
      box-shadow: 0px 0px 10px violet;

      background-color: purple;

      animation: background 15s linear infinite; 
   }

   @keyframes background {
      from {
         transform: translateY(999rem);
      }
      to {
         transform: translateY(0rem);
      }
   } */
`;