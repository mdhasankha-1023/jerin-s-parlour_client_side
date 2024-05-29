
// eslint-disable-next-line react/prop-types
export default function PrimaryTitle({text1, text2, style}) {
  return (
    <div>
        <h1 className={`${style} text-3xl font-bold mt-4 mb-8`} >{text1} <span className="text-primaryBg">{text2}</span></h1>
    </div>
  )
}
