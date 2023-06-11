import "./postList.css";
import PostItem from "../PostItem";
export default function PostList({ data }) {
    return (
        <ul className="post-list">
            {data.map((obj) => (
                <PostItem key={obj.id} {...obj} />
            ))}
        </ul>
    );
}
