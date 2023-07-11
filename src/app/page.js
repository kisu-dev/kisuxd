"use client"
import ButtonAnimation from "../components/Button";
import CursorComponent from "../components/CursorComponent";
import CubeAnimation from "../components/Textaesthetic";
import HorizontalScroll from "../components/Horizontalscroll";
import ZoomComponent from "../components/Zoommask";
import OceanCanvas from "../components/Ocean";
import Cards from "../components/Cards";
import Logos from "../components/Logos";
import BigText from "../components/BigText";


const home = () => {
  return ( 
  <div>
    <OceanCanvas/>
    <BigText/>
    <h5>kisu testing</h5>  
    <h2 class="cursor-scale">jeje</h2>
    <h1 class="logo cursor-scale small">cursorjeje</h1>
    <CursorComponent />
    <ButtonAnimation/>
    <Logos/>
    <div style={{display:"flex", flexDirection:"row", gap:"28px"}}>   
    <Cards/>  
    <Cards/>  
    <Cards/>  
    </div>
    <HorizontalScroll/>
    <CubeAnimation/>
    <ZoomComponent/>
    <div style={{height: "300vh"}}></div>

  </div> 
  );
}
 
export default home