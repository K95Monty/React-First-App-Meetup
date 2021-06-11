import { useContext } from 'react';

import classes from'./MeetupItem.module.css';
import Cards from '../ui/Cards';
import FavouritesContext from '../../store/favourites.context';

function MeetupItem(props) {
    const favouritesCtx = useContext(FavouritesContext);

    const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

    function toggleFavouritesStatusHandler() {
        if (itemIsFavourite) {
            favouritesCtx.removeFavourite(props.id);
        }
        else {
            favouritesCtx.addFavourite({
            id: props.id,
            image: props.image,
            description: props.description,
            address: props.address,
            })
        }
    }

    return (
    <li className={classes.item}>
        <Cards>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavouritesStatusHandler}>{itemIsFavourite ? 'Remove From Favourites' : 'To Favourites'}</button>
            </div>
        </Cards>
    </li>
    )
}

export default MeetupItem;