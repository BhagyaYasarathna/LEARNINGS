import PropTypes from "prop-types";
import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";
import styles from "./styles.module.css";

export function UserProfile(props) {
    console.log(props);

    props.callMe();

    return (
        <>
            <UserUsername username={props.username} />

            <b className={styles.username}> Age: </b>
            <span>{props.age}</span>

            <div>
                <span>
                    <b>Email: </b>
                </span>
                <span>anson@ansonthedev.com</span>
            </div>

            <UserFavoriteFoods />

            {String(props.isLoggedIn)}
        </>
    );
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    callMe: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool,
    favoriteFoods: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
};
