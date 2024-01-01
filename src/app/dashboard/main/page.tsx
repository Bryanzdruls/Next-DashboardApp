import { Metadata } from "next";
import WidgetGrid from '../../../components/dashboard/WidgetGrid';

export const metadata: Metadata = {
  title:'Admin Dashboard',
  description: 'Duis laborum dolor cillum adipisicing occaecat.'
};

const mainPage = () => {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">General Information</span>
      <WidgetGrid/>      
    </div>
  )
}

export default mainPage
