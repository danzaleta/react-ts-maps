import { PlacesProvider } from "./context"

const App = () => {
    return (
        <PlacesProvider>
            <h1>Provider Child</h1>
        </PlacesProvider>
    )
}

export { App }