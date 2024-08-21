import "./styles.css"

export function UserUsername(props){
  return (
    <>
      <b className="username">Username: </b>
      <span>{props.username}</span>
    </>
  )
}