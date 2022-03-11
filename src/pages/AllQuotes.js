import {Fragment} from 'react';

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_LIST = [
    { id: 'q1', author: 'React is Good for learnig', text: 'React JS'},
    { id: 'q2', author: 'React is Good for Work', text: 'React Route'},
    { id: 'q3', author: 'React is Good for taching', text: 'React Redx'},
];
const AllQuotes = () => {
  return <Fragment>
      <QuoteList quotes={DUMMY_LIST} />
  </Fragment>;
};

export default AllQuotes;
