import './form.css';

const Form = () => {

    const handleClick = (event) => {
        event.preventDefault();
    }

    return (
        <div className="contacts">
            <div className="container">
                <h2 className="section-title contacts-title">Contact Us</h2>
                <p className="contacts__text">
                    Feel free to contact us with questions, potencial partnerships or media inquiries
                </p>
                <form className="form">
                    <input className="form__input" type="text" placeholder="Name" />
                    <input className="form__input" type="email" placeholder="E-mail" />
                    <textarea className="form__textarea" placeholder="Your text"></textarea>
                    <button className="form__btn" onClick={handleClick} type="submit">SUBMIT</button>
                </form>
            </div>
      </div>
    );
}
 
export default Form;