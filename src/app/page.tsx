import { redirect } from "next/navigation"


export default function HomePage() {
  redirect('/dashboard/main');
  //Nunca se va a ejecutar
  return (
    <>
      <h1>Hola mundo</h1>
    </>
  )
}
