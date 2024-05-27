
// eslint-disable-next-line react/prop-types
export default function UserAvater({userName}) {
  return (
    <div className="avatar flex justify-center">
      <h2>{userName}</h2>
      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
  )
}
