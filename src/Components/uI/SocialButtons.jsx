
// eslint-disable-next-line react/prop-types
export default function SocialButtons({text, icon}) {
  return (
    <button className="btn btn-outline">
        <img src={icon} alt="google" />
        {text}</button>
  )
}
