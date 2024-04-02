import Featured from "./components/Featured";
import Featured2 from "./components/Featured2";
import Menus from "./components/Menus";
import Offer from "./components/Offer";
import Slider from "./components/Slider";
import Snacks from "./components/Snacks";


export default function Home() {
  return (
    <main>
      <Slider/>
      <Featured/>
      <Snacks/>
      {/* <Menus/> */}
     <Featured2/>
    
      <Offer/>
     
    </main>
  )
}