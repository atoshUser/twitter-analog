import "./postItem.css";
export default function PostItem({ label, liked, id }) {
    let titleClass = "title-data";
    let star = "star";
    if (liked) {
        titleClass = titleClass.concat(" liked");
        star = star.concat(" removeStar");
    }
    return (
        <li key={id} className="post-item">
            <span className={titleClass}>{label}</span>
            <div className="item-inner">
                <button type="button" className={star}>
                    <i class="fa-solid fa-star"></i>
                </button>
                <button type="button" className="trash">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <button type="button" className="heart visually-hidden">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>
        </li>
    );
}
