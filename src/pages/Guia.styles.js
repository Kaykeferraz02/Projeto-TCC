import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: ${props => props.theme.header};
  padding: 1rem;

  .header {
    background-color: #00040D; 
    box-shadow: 0px 3px 10px #464646; 
  }

  .nav-bar img {
    padding: 0;
    height: 65px; 
    width: auto;
  }

  .nav-bar {
    display: flex;
    justify-content: space-between;
    padding: 0; 
    align-items: center;
  }

  .nav-list {
    display: flex;
    align-items: center;
  }

  .nav-list ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  .nav-item {
    margin: 0 15px;
  }

  .nav-link {
    text-decoration: none;
    font-size: 24px; 
    color: ${props => props.theme.textColorLaranja};
    font-weight: 400;
    cursor: pointer;
    border: none;
    text-align: right;
  }

  .nav-link:hover {
    color: ${props => props.theme.textColorLaranja}; 
  }

  .mobile-menu-icon {
    display: none;
  }

  .mobile-menu {
    display: none;
  }

  @media screen and (max-width: 730px) {
    background: ${props => props.theme.header};
    margin-top: -3rem;

    .nav-bar {
      padding: 1.5rem 2rem;
    }

    .logo{
      margin-left: -2rem;
      margin-top: 2.8rem;
    }

    .nav-item {
      display: none;
    }

    .mobile-menu-icon {
      display: block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: ${props => props.theme.header}; 
      z-index: 1000;
    }

    .mobile-menu-icon button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .mobile-menu-icon .icon {
      margin-top: 1.9rem;
      width: 40px;
      height: 40px;
      color: ${props => props.theme.textColorLaranja}; 
    }

    .mobile-menu {
      position: fixed;
      top: 1rem; 
      right: -0.1rem; 
      width: 200px;
      background: ${props => props.theme.header}; 
      border-radius: 0.5rem;
      display: none; 
      align-items: center;
      padding: 1rem;
      transition: opacity 0.3s;
      opacity: 0; 
    }

    .mobile-menu.open {
      display: flex; 
      opacity: 1; 
    }

    .mobile-menu ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;
    }

    .mobile-menu .nav-item {
      display: block;
      padding: 1rem;
    }
  }
`;



export const Titulo = styled.h1`
  margin: 2rem 0;
  font-size: 60px;
  text-align: center;
  color: #5D3FD3;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

export const Column = styled.div`
  flex: 1;
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

export const AtivacaoContainer = styled.div`
  color: #F08080;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

  @media (max-width: 768px) {
    font-size: 28px;
    padding-top: 2rem;
  }
`;

export const PersoContainer = styled.div`
  color: #F08080;
  margin-bottom: 2rem;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

  @media (max-width: 768px) {
    font-size: 28px;
    padding-top: 2rem;
  }
`;

export const MonitoContainer = styled.div`
  color: #F08080;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

  @media (max-width: 768px) {
    font-size: 28px;
    padding-top: 2rem;
  }
`;

export const FeedbackContainer = styled.div`
  color: #F08080;
  margin-bottom: 3rem;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

  @media (max-width: 768px) {
    font-size: 28px;
    padding-top: 2rem;
  }
`;

export const DespertarContainer = styled.div`
  color: #F08080;
  margin-bottom: 4rem;
  text-align: center;
  padding-top: 1.8rem;
  font-weight: bold;
  font-size: 37px;

  @media (max-width: 768px) {
    font-size: 28px;
    padding-top: 1rem;
  }
`;

export const IntegracaoContainer = styled.div`
  color: #F08080;
  text-align: center;
  padding-top: 4rem;
  font-weight: bold;
  font-size: 37px;

  @media (max-width: 768px) {
    font-size: 28px;
    padding-top: 2rem;
  }
`;

export const TextContainer1 = styled.div`
  color: #6699CC;
  font-weight: normal;
  font-size: 1.5rem;
  letter-spacing: -0.5px; 
  margin-left: 16rem;
  margin-right: 15rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 1.2rem;
  }
`;

export const TextContainer2 = styled.div`
  color: #6699CC;
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
  margin-left: 7rem;
  margin-right: 5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 1.2rem;
  }
`;

export const TextContainer3 = styled.div`
  color: #6699CC;
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
  letter-spacing: -0.5px; 
  line-height: 1.4; 
  margin-left: 16rem;
  margin-right: 15rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 1.2rem;
  }
`;

// Adicione as media queries semelhantes para os outros TextContainers...

export const MainContainertwo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 2rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 0 1rem;
  }
`;

export const ImgProto = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 10rem;
  margin-top: 0.5rem;
  width: auto;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

export const ImgArduino = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 38rem;
  margin-top: 0.5rem;
  width: auto;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

export const ImgDiodo = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 65rem;
  margin-top: 0.5rem;
  width: auto;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

export const ImgRtc = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 95rem;
  margin-top: 0.5rem;
  width: auto;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

export const ImgFonte = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 36rem;
  margin-top: 0.5rem;
  width: auto;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

export const ImgMotor = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 7rem;
  margin-top: 0.5rem;
  width: auto;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

export const ImgCouro = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 95rem;
  margin-top: 0.5rem;
  width: auto;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

export const ImgDeitante = styled.img`
  height: 250px;
  border-radius: 0.7rem;
  margin-bottom: 10px;
  max-width: 500px;
  margin-left: 65rem;
  margin-top: 0.5rem;
  width: auto;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

