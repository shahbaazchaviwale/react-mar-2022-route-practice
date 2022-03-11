import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
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

  if (!quote) {
    return <p>No item found</p>
  }
  console.log("quote >>", quote);
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
