import { UserProfile } from "./components/UserProfile";

export default function App() {
    const callMe = () => {
        console.log("Hello");
    };

    return (
        <>
            <h1>Root Component</h1>

            <UserProfile
                username="Bob"
                age={25}
                isLoggedIn={true}
                favoriteFoods={[
                    {
                        name: "Sushi",
                        id: "sushi",
                    },
                    {
                        name: "Pizza",
                        id: "pizza",
                    },
                ]}
                callMe={callMe}
            />
        </>
    );
}
