
// eslint-disable-next-line react/prop-types
export default function SocialButtons({text, icon, handler}) {
  return (
    <button onClick={handler} className="btn btn-outline">
        <img src={icon} alt="google" />
        {text}</button>
  )
}
