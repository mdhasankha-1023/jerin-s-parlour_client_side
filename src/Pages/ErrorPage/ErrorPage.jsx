import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="flex justify-center items-center gap-4 flex-col h-screen">
            <h1 className="text-8xl font-bolder text-center">Oops!</h1>
            <p className="text-2xl text-center font-bold">Sorry, an unexpected error has occurred.</p>
            <p className="text-center text-xl text-[red]">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
