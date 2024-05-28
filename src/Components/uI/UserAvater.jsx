
// eslint-disable-next-line react/prop-types
export default function UserAvater({userEmail, userPhoto}) {
  return (
    <div className="avatar flex flex-col-reverse justify-center items-center gap-3">
      <h2>{userEmail}</h2>
      <div className="w-24 rounded-full ring ring-offset-1">
        <img src={userPhoto} />
      </div>
    </div>
  )
}
