import "./postAddMsg.css";
export default function PostAddMsg() {
    return (
        <form className="form">
            <textarea
                name="msg"
                rows="5"
                placeholder="Enter your imagine"
            ></textarea>
            <button className="form-btn" type="submit">
                Send
            </button>
        </form>
    );
}
