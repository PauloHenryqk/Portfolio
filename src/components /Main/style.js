import styled from "styled-components"

export const MainStyle = styled.main `
   
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
      margin: 3rem;
      text-align: center;
      color: var(--primary-color);
   }

   .techs {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      background-color: blue;
   }

   .cardTech {
      width: 18.7rem;
      height: 18.7rem;
      padding: .6rem;
      border: 1px solid #dbdcde;
      margin: 1.5rem;
      /* flex: none; */
      color: var(--primary-color);

      background-color: red;
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
      border: 1px solid #dbdcde;
      border-radius: 1.2rem 1.2rem 1.20rem 1.20rem;
      padding: .6rem;
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
   }

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

   #imgSchool, #imgCourse, #imgEnglish {
      width: 6.2rem;
      height: 6.2rem;
      border-radius: 50%;
      margin: 0rem auto .6rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--secondary-color);
   }

   #imgSchool img {
      width: 3.7rem;
      height: 3.7rem;
   }

   #imgCourse img {
      width: 6.2rem;
      height: 6.2rem;
   }

   #whatIdone {
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.2rem;
      color: var(--primary-color);
   }

   #containerProject {
      width: 50rem;
      height: 21.8rem;
      display: flex;
      gap: .9rem;
      flex-flow: row nowrap;
      overflow: auto;
      scroll-behavior: smooth;
   }

   #containerProject::-webkit-scrollbar {
      display: none;
   }

   .arrows {
      width: 4.3rem;
      height: 4.3rem;
      color: var(--secondary-color);
      cursor: pointer;
      border-radius: 50%;
   }

   .arrows:hover {
      color: #dbdcde;
      box-shadow: 0rem 0rem .6rem black;
   }

   .projetos {
      width: 12.5rem;
      height: 21.8rem;
      padding: 1.8rem .3rem .3rem;
      flex: none;
      border: 1px solid #dbdcde;
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

`;