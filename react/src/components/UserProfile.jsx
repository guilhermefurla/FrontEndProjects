import PropTypes from "prop-types"
import { UserUsername } from "./UserUsername";
import { UserFoods } from './UserFoods'


export function UserProfile(props){
  return (
    <>
      <b>Age: </b>
      <span>{props.age}</span>
      <>
      <UserUsername username={props.username} />
      <UserFoods/>
      </>
    </>
  )
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isLoggedIn: PropTypes.bool,
};