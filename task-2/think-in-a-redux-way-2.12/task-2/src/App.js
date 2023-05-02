import { Provider } from "react-redux";
import Header from "./components/Header";
import InputData from "./components/InputData";
import PreviewData from "./components/PreviewData";
import store from "./redux/store";
export default function App() {
    return (
        <Provider store={store}>
            <Header />
            <section>
                {/* <!-- Input Data --> */}                
                <InputData />
                {/* <!-- Preview Data --> */}                
                <PreviewData />
            </section>        
        </Provider>
    );
}