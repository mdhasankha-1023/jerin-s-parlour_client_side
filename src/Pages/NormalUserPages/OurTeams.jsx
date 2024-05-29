import { useEffect, useState } from "react"
import PrimaryTitle from "../../Components/uI/PrimaryTitle"
import WorkerInfoCard from "../../Components/uI/WorkerInfoCard"


export default function OurTeams() {
  const [workers, setWorkers] = useState([])

  console.log(workers)
  // fetch data
  useEffect(() => {
    fetch('/ExpertWorkers.json')
      .then(res => res.json())
      .then(data => setWorkers(data))
      .catch(error => console.log(error.massage))
  }, [])
  return (
    <div className="w-full xl:w-4/5 mx-auto mt-8 mb-20">
      <PrimaryTitle text1={'Our Expert'} text2={'Workers'} style={'text-center'} />
      <div className="grid grid-cols-3 gap-x-8 gap-y-12 mx-8 my-20">
        {
          workers
            .map(worker => <WorkerInfoCard key={worker.id} workerInfo={worker} />)
        }
      </div>
    </div>
  )
}
