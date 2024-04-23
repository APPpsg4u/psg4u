import React from "react";
import './ConfirmPassword.css';

function ConfirmPassword(){
    return (
        <div className="confirmpassword">
            <div className="cpPage">
            <div class="leftSide">
            <nav>
                <img src='/images/logo_psg4u.png' alt='psg4u logo' />
            </nav>
            <p class="tagline">FIND</p>
            <p class="tagline">CONNECT</p>
            <p class="tagline">SCHEDULE</p>
            </div>    
            
            <div className="cpForm">
                <h1>Confirm Password</h1>
                <form>
                    <div className="row">
                    <label>
                        User ID:
                    </label>
                    <input type="text" name="name" className="input"/>
                    </div>
                    <div className="row">
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password" className="input"/>
                    </div>
                    <div className="row">
                    <label>
                        Re-enter password:
                    </label>
                    <input type="password" name="password" className="input"/>
                    </div>
                    <button type="submit" class="submit">Confirm</button>
                </form>
            </div>
            </div>
            <footer>
                <p>&#169; PSG College of Technology</p>
                <p class="help">Help & Support @contact_details</p>
            </footer>
        </div>
    )
}

export default ConfirmPassword