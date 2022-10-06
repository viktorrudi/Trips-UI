import "./App.css";
import { Trips } from "./components/Trips";
import { Providers } from "./global/Providers";
import { Shell } from "./ui/Shell/Shell";

function App() {
  return (
    <Providers>
      <Shell>
        <Trips />
      </Shell>
    </Providers>
  );
}

export default App;
