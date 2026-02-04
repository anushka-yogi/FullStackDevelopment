import WelcomeMessage from "./components/WelcomeMessage";
import { CiShoppingCart } from "react-icons/ci";
const App = () => {
  const myName = "Anushka Yogi";
  const multiply = (a,b) => a*b ;
  const specialClass = 'simple-class'
  return (
    <section>
      <p> 2+2={2 + 2}</p>
      <h1>{myName}</h1>
      <p>My Friend list : {["Vikram"]}</p>
      <p>2*10 = {multiply(2,10)}</p>
      <p className={specialClass}>SimpleClass<CiShoppingCart/></p>
    </section>
  );
};
export default App;
