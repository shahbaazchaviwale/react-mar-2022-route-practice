import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  const match = useRouteMatch();
  const location = useLocation();

  console.log(' QuoteItem >> match', match)
  console.log(' QuoteItem >> location', location)
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.id.toUpperCase()} - {props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`${match.path}/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
