import PropTypes from "prop-types"
import { UserUsername } from "./UserUsername";
import { UserFoods } from './UserFoods'


export function UserProfile(props){
  return (
    <div id="user-profile">
      <UserUsername username={props.username} />
      <b>Age: </b>
      <span>{props.age}</span>
      <UserFoods/>
    </div>
  )
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isLoggedIn: PropTypes.bool,
};