import {CardCounter} from "@/shopping-cart";
import { Metadata } from "next"


export const metadata: Metadata = {
  title:'Shopping Cart',
  description: 'Counter application '
};

const CounterPage = () => {
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <CardCounter value={4}/>
    </div>
  )
}

export default CounterPage
