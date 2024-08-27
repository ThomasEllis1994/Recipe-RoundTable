import "./App.css";
// import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "../src/components/Navbar";
import { Footer } from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <AppRoutes />
            <Footer />
        </>
    );
}

export default App;
