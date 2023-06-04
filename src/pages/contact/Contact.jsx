import "./contact.scss"
const Contact = () => {
    return (
        <div className="contact">
            <form>
                <div className="inputGroup">
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">email</label>
                    <input type="text" id="email" name="email"/>
                </div>
                <div className="inputGroup">
                    <label htmlFor="contact">message</label>
                    <textarea type="text" id="contact" name="contact" rows="10" ></textarea>
                </div>
                <div className="btn">
                <button type="submit"> contact </button>
                </div>
            </form>
        </div>
    )
}

export default Contact
