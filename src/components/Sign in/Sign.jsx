import React from 'react'
import "./sign.css"
const Sign = () => {
    return (
        <div>
            <form>
                <h1>Sign in</h1>
                <div className="social-container">
                    <div className="social">
                        <a href="https://www.facebook.com">
                            <i class="fa fa-facebook-official"></i>
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://www.twitter.com">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="social">
                        <a href="https://www.linkedin.com">
                            <i class="fa fa-linkedin-square"></i>
                        </a>
                    </div>
                </div>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Sign
