import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { Fragment } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { Link } from "react-router-dom";

const DUMMY_LIST = [
  { id: "q1", author: "React is Good for learnig", text: "React JS" },
  { id: "q2", author: "React is Good for Work", text: "React Route" },
  { id: "q3", author: "React is Good for taching", text: "React Redx" },
];

const QuoteDetail = () => {
  const param = useParams();
  const quote = DUMMY_LIST.find((quoteItem) => quoteItem.id === param.quoteId);

  if (!quote) {
    return <p>No item found</p>;
  }
  console.log("quote >>", quote);
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* set -1: below code shown in page when they found "/quotes/q3"  */}
      {/* set -1: below code hide in page when they found "/quotes/q3/comments"  */}
      <Route path={`/quotes/${param.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${param.quoteId}/comments`}>
            load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
