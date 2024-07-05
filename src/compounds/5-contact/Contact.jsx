
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
// @ts-ignore
import doneAnimation from "../../animation/done.json"
// @ts-ignore
import contactAnimation from "../../animation/email.json"


function Contact() {
    const [state, handleSubmit] = useForm("mbjnepog");
    // if (state.succeeded) {
    //     return <p>Thanks for joining!</p>;
    // }
    return (
        <section className="contact-us" id='contact'>
            <h1 className="title">
                <span className="icon-envelope"></span>
                Contact Me
            </h1>
            <p className="sub-title">Lorem ipsum, dolor svc;vvit amet consectxfdetur adi</p>
            <div className="flex" style={{justifyContent : 'space-between' }}>
                <form onSubmit={handleSubmit} action="" className="">
                    <div className='flex'>
                        <label htmlFor="email">Email Address:</label>
                        <input required type="email" name="email" id="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className='flex' style={{ marginTop: "15px" }}>
                        <label htmlFor="message">Your message:</label>
                        <textarea name="message" id="message" required> </textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting} className='submit'>
                        {state.submitting ? "submitting....." : "submit"}
                    </button>
                    {state.succeeded && (<p style={{ fontSize: "18px", marginTop: "1.7rem"  , flexDirection : 'row-reverse'}} className='successMess flex'>
                        <Lottie style={{height : 55}} animationData={doneAnimation} />
                        Your message has been sent successfully
                    </p>)}
                </form>
                <div className="animation">
                <Lottie className='contact-anime' style={{height : 400}} animationData={contactAnimation} />
                </div>
            </div>
        </section>
    )
}


export default Contact