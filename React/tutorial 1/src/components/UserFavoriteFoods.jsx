import { createElement } from "react";
import styles from "./users.module.scss";

export function UserFavoriteFoods() {
    return createElement(
        "section",
        null,
        <span className={styles.foodsTitle}>
            <b>Favorite Foods: </b>
        </span>,
        <br />,
        <ul>
            <li>Sushi</li>
            <li>Pizza</li>
            <li>Mediterranean Food</li>
        </ul>
    );
}
