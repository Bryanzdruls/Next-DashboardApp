import { redirect } from "next/navigation"


export default function HomePage() {
  redirect('/dashboard/counter');
  //Nunca se va a ejecutar
  return (
    <>
      <h1>Hola mundo</h1>
    </>
  )
}
