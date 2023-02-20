import { Link } from 'react-router-dom';
import classes from './SignUpPage.module.css';

function SignUpPage() {
    return (
        <div className = {classes.total}>
        <br />
        {/* <h2 className = {classes.h2}>SIGN IN</h2> */}
        {/*   */}
        <form action="/home" className= {classes.form1}>
            <p>
                <label><b>Email address</b></label><br/>
                <input className = {classes.get_input} type="text" name="e_mail" placeholder='Enter e-mail' required />
            </p>
            <br />
            <p>
                <label><b>Name</b></label><br />
                <input className= {classes.get_input} type="text" name="first_name" placeholder='Enter your name' required />
            </p><br />
            <p>
                <label><b>Mobile number</b></label><br />
                <input className= {classes.get_input} type="text" name="mobile_number" placeholder='Enter mobile number' required />
            </p><br />
            <p>
                <label><b>Country</b></label><br />
                <input className= {classes.get_input} type="text" name="country" placeholder='Enter country' required />
            </p>
            <p><br />
                <label><b>Password</b></label>
                <br/>
                <input className = {classes.get_input} type="password" name="password" placeholder='Enter password' required />
            </p>
            <br /><br />
            <p>
                <button className = {classes.sub_btn} type="submit">Sign Up</button>
            </p>
            <footer className = {classes.footer1}>
            <p>Already have an account? </p>
            <br />
            {/* <p><Link to="/">Home</Link>.</p> */}
        </footer>
        </form>
    </div>
    );
}

export default SignUpPage;