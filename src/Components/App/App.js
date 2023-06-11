import AppHeader from "../AppHeader";
import SearchPanel from "../searchPanel";
import PostStatusFilter from "../postSatusFilter";
import PostList from "../PostList";
import PostAddMsg from "../PostAddMsg";
/* CSS */
import "./app.css";
function App() {
    const data = [
        { label: "I am learning React JS", liked: false, id: "qz" },
        { label: "I want to work in FidoBusiness", liked: true, id: "qq" },
        { label: "I am going to learn TaiwilendCSS", liked: true, id: "qy" },
    ];

    return (
        <div className="app">
            <AppHeader />
            <div className="wrapper-searchPanel">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList data={[...data]} />
            <PostAddMsg />
        </div>
    );
}

export default App;
