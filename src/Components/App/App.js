import AppHeader from "../AppHeader";
import SearchPanel from "../searchPanel";
import PostStatusFilter from "../postSatusFilter";
import PostList from "../PostList";
import PostAddMsg from "../PostAddMsg";
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
            <PostList />
            <PostAddMsg />
        </div>
    );
}

export default App;
