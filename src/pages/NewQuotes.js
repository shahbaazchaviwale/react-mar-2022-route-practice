import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
  const history = useHistory();
  const FormHandler = (quoteData) => {
    console.log("quoteData >>", quoteData);
    /**
     * What is difference between PUSH and REPLACE in react router?
        When you use the router.replace , you're overwritting the top of the the stack. 
        When using the router.push , it adds a new route to the top of the stack .
     */
    history.push("/quotes");
  };
  return (
    <Fragment>
      <QuoteForm onAddQuote={FormHandler} />
    </Fragment>
  );
};

export default NewQuotes;
