import "./postAddMsg.css";
export default function PostAddMsg() {
    return (
        <form className="form">
            <input
                type="text"
                name="msg"
                placeholder="Enter your imagine"
                autoComplete="off"
            />
            <button className="form-btn" type="submit">
                Send
            </button>
        </form>
    );
}
