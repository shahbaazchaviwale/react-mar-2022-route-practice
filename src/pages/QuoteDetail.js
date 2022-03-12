import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { Fragment } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_LIST = [
  { id: "q1", author: "React is Good for learnig", text: "React JS" },
  { id: "q2", author: "React is Good for Work", text: "React Route" },
  { id: "q3", author: "React is Good for taching", text: "React Redx" },
];

const QuoteDetail = () => {
  const param = useParams();
  const quote = DUMMY_LIST.find((quoteItem) => quoteItem.id === param.quoteId);
  /**
   * if suppose in App.js some changes made in ROUTE tag for URL change then useRouteMatch()
   * method used for matching URL with programatically
   */
  const match = useRouteMatch();
  console.log("match >>", match);

  if (!quote) {
    return <p>No item found</p>;
  }
  console.log("quote >>", quote);
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* set -1: below code shown in page when they found "/quotes/q3"  */}
      {/* set -1: below code hide in page when they found "/quotes/q3/comments"  */}
      {/* /quotes/${param.quoteId} => ${match.path} */}
      <Route path={`${match.path}`} exact>

        <div className="centered">
          {/* /quotes/${param.quoteId} => ${match.path} = O/P => quotes/q3/ */}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            load Comments
          </Link>
        </div>
        
      </Route>
      {/* /quotes/${param.quoteId} => ${match.path} */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
