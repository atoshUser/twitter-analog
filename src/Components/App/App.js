import AppHeader from "../AppHeader";
import SearchPanel from "../searchPanel";
import PostStatusFilter from "../postSatusFilter";
/* CSS */
import "./app.css";
function App() {
    return (
        <div className="app">
            <AppHeader />
            <div className="wrapper-searchPanel">
                <SearchPanel />
                <PostStatusFilter />
            </div>
        </div>
    );
}

export default App;
