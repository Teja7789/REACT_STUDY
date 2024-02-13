import { useRouteError } from "react-router";
const NotFound = () => {
    const err = useRouteError();
    console.log(err,"err")
    return(
        <div>{err.status}:{err.statusText}</div>
    )
}
export default NotFound;