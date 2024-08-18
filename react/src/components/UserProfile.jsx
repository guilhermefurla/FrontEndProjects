import { UserUsername } from "./UserUsername";
import { UserFoods } from './UserFoods'


export function UserProfile(props){
  return (
    <div id="user-profile">
      <UserUsername username='bob' />
      <b>Age: </b>
      <span>{props.age}</span>
      <UserFoods/>
    </div>
  )
}