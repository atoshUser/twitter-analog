import "./postItem.css";
export default function PostItem() {
    return (
        <li className="post-item">
            <span className="title-data">Hello world</span>
            <div className="item-inner">
                <button type="button" className="star">
                    <i class="fa-solid fa-star"></i>
                </button>
                <button type="button" className="trash">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <button type="button" className="heart">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>
        </li>
    );
}
