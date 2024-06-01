
// eslint-disable-next-line react/prop-types
export default function WorkerInfoCard({workerInfo}) {
    // console.log(workerInfo)
    // eslint-disable-next-line react/prop-types
    const {name, pic_url, about, profession} = workerInfo;


  return (
    <div className="card w-full bg-base-100 shadow-xl">
            <figure className="h-2/5"><img className="w-full h-full" src={pic_url} alt="Shoes" /></figure>
            <div className="card-body items-center gap-y-0 px-2 py-4 h-3/5">
                <h2 className="card-title">{name}</h2>
                <p className="text-primaryBg font-bold">{profession}</p>
                <p className="text-center">{about}</p>
            </div>
        </div>
  )
}
