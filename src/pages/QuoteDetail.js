import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
    const param = useParams();
    return <div>
        Quote Detail
        <p>{param.quoteId}</p>
        <Route path={`/quotes/${param.quoteId}/comments`}>
            <Comments/>
        </Route>

    </div>
}

export default QuoteDetail;