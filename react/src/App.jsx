import { UserProfile } from "./components/UserProfile"
export default function App(){
  return(
    <>
      <UserProfile  username='bob' age={20} isLoggedIn={true}/>
    </>
  )
}