
// eslint-disable-next-line react/prop-types
export default function Buttons({value, handler, type}) {
  return (
        <button onClick={handler} type={type} className="btn bg-btnPrimary text-[#FFF] px-8">{value}</button>
  )
}
