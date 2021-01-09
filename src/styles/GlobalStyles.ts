import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100vw;
  }

  *, button, input{
    border: 0;
    background: none;
  }

  html {
    color: #494949;
  }

  :root {
    --backgroundPrimary: #DFE1ED;
    --backgroundSecondary: #FFFFFF;
    --colorIconsMenu: #C1C3C6;
    --hoverIconMenu: #1F1C2F;
    --secondaryCardOption1: #2EC9FE;
    --backgroundDaysCardOption1: #DBF6FD;
    --primaryColorCardOption2: #FEE4CB;
    --secondaryColorCardOption2:#FF723A
    --primaryColorCardOption3: #BAF3D2;
    --secondaryColorCardOption3: #04D94F;
    --primaryColorCardOption4: #FFD3E2;
    --secondaryColorCardOption4: #FF82B5;
    --primaryColorCardOption5: #E9E7FD;
    --secondaryColorCardOption: #9C4AFF;
    
  }
`;
