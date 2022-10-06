import { TripContainer } from "./components/Trip/TripContainer";
import { Providers } from "./global/Providers";
import { Shell } from "./ui/Shell/Shell";

function App() {
  return (
    <Providers>
      <Shell>
        <TripContainer />
      </Shell>
    </Providers>
  );
}

export default App;
