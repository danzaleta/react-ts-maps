import { PlacesProvider } from "./context"
import { Home } from "./screens/Home"

const App = () => {
    return (
        <PlacesProvider>
            <h1>Provider Child</h1>
            <Home/>
        </PlacesProvider>
    )
}

export { App }