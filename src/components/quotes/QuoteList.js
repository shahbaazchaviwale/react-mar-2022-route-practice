import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {

  const history = useHistory();
  const location = useLocation(); //get params of URL
  // new URLSearchParams => its  javascript constructor
  //The URLSearchParams interface defines utility methods to work with the query string of a URL.
  const queryParam = new URLSearchParams(location.search)

  //http://localhost:3000/quotes?sort=asc
  const isSortingAscending = queryParam.get('sort') === 'asc';
  console.log('isSortingAscending >>', isSortingAscending)

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    // called AllQuotes component
    history.push('/quotes?sort='+ (isSortingAscending? 'desc': 'asc'))
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
