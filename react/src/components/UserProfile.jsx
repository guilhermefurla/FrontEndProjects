import { UserUsername } from "./UserUsername";


export function UserProfile(){
  return (
    <div id="user-profile">
      <UserUsername username='bob' />
      <div>
        <span>Email: </span>
        <span>anson@ansonthedev.com</span>
      </div>
      <section>
        <span>Favorite Foods:</span>
        <br />
        <ul>
          <li>Sushi</li>
          <li>Pizza</li>
          <li>Rice</li>
        </ul>
      </section>
    </div>
  )
}