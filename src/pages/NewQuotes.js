import {Fragment} from 'react';
import QuoteForm from '../components/quotes/QuoteForm';


const NewQuotes = () => {

const FormHandler = (quoteData) => {
    console.log('quoteData >>', quoteData);
}
return <Fragment>
        <QuoteForm onAddQuote={FormHandler}/>
    </Fragment>
}

export default NewQuotes;