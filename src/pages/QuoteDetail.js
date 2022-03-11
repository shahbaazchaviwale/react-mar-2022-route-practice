import { useParams } from "react-router-dom";

const QuoteDetail = () => {
    const param = useParams();
    return <div>
        Quote Detail
        <p>{param.quoteId}</p>

    </div>
}

export default QuoteDetail;