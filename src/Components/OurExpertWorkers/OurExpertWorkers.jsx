import { useEffect, useState } from "react"
import WorkerInfoCard from "../uI/WorkerInfoCard"
import PrimaryTitle from "../uI/PrimaryTitle"
import { Link } from "react-router-dom"
import Buttons from "../uI/Buttons"

export default function OurExpertWorkers() {
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
        <div className="w-full xl:w-4/5 mx-auto">
            <PrimaryTitle text1={'Get Expert'} text2={'Workers'} style={'text-center'} />
            <div className="grid grid-cols-3 gap-x-8 gap-y-12 mx-8">
                {
                    workers
                        .slice(0, 3)
                        .map(worker => <WorkerInfoCard key={worker.id} workerInfo={worker} />)
                }
            </div>
            <div className="text-center my-16">
                <Link to={'/our-teams'}>
                    <Buttons value={'Explore More'} />
                </Link>
            </div>
        </div>
    )
}
