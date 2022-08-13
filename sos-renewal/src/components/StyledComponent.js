import styled, {keyframes} from 'styled-components';
import MainLogo from '../icons/MainLogo.png';
import brochure from '../icons/brochure.gif';
import { HiOutlineSearch } from 'react-icons/hi';
import { FiArrowRightCircle } from 'react-icons/fi';



//////////////////// Header ////////////////////
export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: white;
  z-index: 100;
`;

export const HeaderLogo = styled.div`
  //position: fixed;
  background-image: url(${MainLogo});
  background-size: 200px 50px;
  background-repeat: no-repeat;
  width: 240px;
  height: 48px;
  margin-left: 120px;
  cursor : pointer;
`;

export const HeaderSearchBox = styled.div`
  width: 230px;
  height: 30px;
  margin-right: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  border: 1px solid #BBBBBB;
  border-radius: 10px;
  
`;

export const HeaderSearchInput = styled.input`
  width: 180px;
  height: 20px;
  margin-left: 10px;
  border: none;
  outline: none;
`;

export const HeaderSearchIcon = styled(HiOutlineSearch)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  color: gray;
  cursor: pointer;
`;

//////////////////// MenuBar ////////////////////
export const MenuBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 60px;
  cursor: pointer;
  z-index: 10;
`;

export const MenuBarTitleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  background: #08517A;
  display: flex;
  justify-content: center;
`;

export const MenuBarTitle = styled.div`
  width: 200px;
  height: 55px;
  background: #08517A;
  font-size: 18px;
  font-weight: 400;
  color: white;
  display : flex;
  justify-content : center;
  align-items : center;

  &:hover {
    font-weight: 500;
  }
`;

export const MenuBarActivatedWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  z-index: 1;
`;

export const MenuBarActivatedBox = styled.div`
  width: 200px;
  height: 300px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const MenuBarActivatedDetail = styled.div`
  width: 100%;
  height: 50px;
  margin-left: 40px;
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 100;
  color: #6C6C6C;

  background-color: white;

  &:hover {
    font-size: 15px;
    font-weight: 800;
    color: black;
  }
  
`;

export const MenuBarActivatedVertical = styled.div`
  height: 280px;
  width: 1px;
  margin-top: 20px;
  background-color: #CECECE;
`;

//////////////////// MainTop ////////////////////
export const MainTopWrapper = styled.div`
  //position: absolute;
  width: 100%;
  height: 70%;
  // margin-top: 0px;
  top: 115px;
  overflow: hidden;
`;

export const MainTopImageWrapper = styled.div`
  width: 100%;
  display: flex;  //이미지 가로로 나열
`


export const MainTopImage = styled.div`
  position: absolute;
  width: 100%;
  height: 70%;
  background-position: bottom;
  ${(props) => {
    const img = props.img;
    return`
      background-image: url(${img});
      background-size: cover;
    `;
  }}
`;


// Box-animation //
const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`
const MainTopBoxConSlide = keyframes`
  from {
    transform: translateX(-300px);
  }
  to {
    transform: translateX(0px);
  }
`

export const MainTopBox = styled.div`
  position: absolute;
  width: 40%;
  height: 70%;
  background: 
    linear-gradient(to right, rgba(102, 151, 172, 0.7) 70% ,  rgba(102, 151, 172, 0));

  font-family: 'Gowun Batang', serif;
  z-index: 5;
  animation: ${fadeIn} 0.8s ease-in-out forwards;
`

export const MainTopBoxTitle = styled.div`
  position: absolute;
  left: 100px;
  top: 40px;
  font-size: 60px;
  font-weight: 600;
  color: rgb(0, 93, 129);

  animation: ${MainTopBoxConSlide} 0.8s ease-out forwards;
`

export const MainTopBoxTitleWhite = styled.span`
  color: #FFFFFF;
  font-size: 80px;
`;

export const MainTopBoxDetail = styled.div`
  position: absolute;
  left: 100px;
  bottom: 40px;

  color: #FFFFFF;
  font-weight: 500;
  font-size: 22px;
  line-height: 35px;

  animation: ${MainTopBoxConSlide} 0.8s ease-out 0.6s forwards;

`

//////////////////// MainCon ////////////////////
export const MainConWrapper = styled.div`
  // position: absolute;
  width: 100%;
  height: 500px;
  margin: 30px 0px 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainConBox = styled.div`
  width: 600px;
  height: 100%;
  margin: 30px;
  // overflow: hidden;
`;

export const MainConTitle = styled.div`
  font-size: 26px;
  font-weight: 600;
  padding: 20px 0 10px 15px;
  border-bottom: 5px solid rgb(8,81,122);
`;

export const MainConButton = styled(FiArrowRightCircle)`
  float: right;
  margin-right: 15px;
  width: 36px;
  height: 36px;
  color: rgb(8,81,122);
  cursor: pointer;
`;

export const MainConListWrapper = styled.div`
  position: relative;
  height: 400px;
  margin-top: 10px;
  //background-color: gray;

`;

export const MainConListElement = styled.div`
  position: relative;
  height: 50px;
  border-bottom: 1px solid rgba(205, 205, 205, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

`;

export const MainConListTitle = styled.div`
  width: 500px;
  margin-left: 15px;
  font-size: 16px;
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
`;


export const MainConListDate = styled.div`
  margin-right: 15px;
  font-size: 14px;
  color: rgba(119, 119, 119, 1);
`;


//////////////////// Shortcuts ////////////////////
export const ShortCutsWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const ShortCutsBox = styled.div`
  position: relative;
  width: 315px;
  height: 150px;
  border: 1px solid rgba(205, 205, 205, 1);
  cursor : pointer;
`;

export const ShortCutsTitle = styled.div`
  margin : 15px;
  font-size: 19px;
  font-weight: 600;
  display: flex;
`;

export const ShortCutsMainTitle = styled.div`
  color: rgba(74, 74, 74, 1);
`;

export const ShortCutsSubTitle = styled.div`
  margin : 0px 10px;
  color: rgba(0, 128, 190, 1);
  z-index: 999;
`;

export const ShortCutsContents = styled.div`
  position: relative;
  width: 250px;
  margin: 0px 15px;
  font-size: 14px;
  line-height: 25px;
  color: rgba(119, 119, 119, 1);
  z-index: 999;
`;

export const ShortCutsIcon = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  right: 5px;
  bottom: 10px;
  ${(props) => {
    const logo = props.logo;
    return `
      background-image: url(${logo});
      background-size: 120px;
    `;
  }}
`;

//////////////////// Footer ////////////////////
export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
  background-color: rgba(233, 233, 233, 1);
`

export const FooterBox = styled.div`
  width: 1260px;
  margin: 0 auto;
`;


export const FooterSiteBox = styled.div`
  position: relative;
  height: 40px;
  background-color: white;
  border: 1px solid rgb(219,219,219);
  top: 20px;
  line-height: 40px;
  font-size: 16px;
  font-weight: 600;
`;

export const FooterSiteBoxTitle = styled.span`
  color: rgb(60, 93, 144);
  padding: 0 50px 0;
  border-right: 3px solid rgb(219,219,219);
`;

export const FooterSiteBoxEle = styled.span`
  color: rgb(121, 121, 121);
  padding: 0 65px 0;
  cursor: pointer;

  &:hover {
    font-weight: 800;
    color: black;
  }
`;

export const FooterInform = styled.span`
  position: relative;
  top: 30px;
  width: 1260px;
  margin: 0 auto;
  color: rgb(74, 74, 74);
`

export const FooterBrochure = styled.div`
  background-image: url(${brochure});
  width: 150px;
  height: 40px;
  background-position: bottom;
  float: right;
  margin-top: 10px;
  cursor: pointer;
`