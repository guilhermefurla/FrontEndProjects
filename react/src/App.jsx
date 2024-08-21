import { UserProfile } from "./components/UserProfile"
export default function App(){
  return(
    <div>
      <h1>Root component</h1>
      <UserProfile  username='bob' age={20} isLoggedIn={true}/>
    </div>
  )
}