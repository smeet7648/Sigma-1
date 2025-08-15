import "./App.css";
function Login() {
    return (
        <div class="container">
            <h2>Login</h2>
            <form>
                <div class="form-group">
                    <input type="text" id="username" required />
                    <label for="username">Username</label>
                </div>

                <div class="form-group">
                    <input type="password" id="password" required />
                    <label for="password">Password</label>
                </div>

                <div class="options">
                    <label><input type="checkbox" /> Remember Me</label>
                    <a href="#">Forgot Password?</a>
                </div>

                <input type="submit" id="btn" value="Login" />

                <p>Don't have an account? <a href="signup.html">Sign Up</a></p>
            </form>
        </div>
    )
}

export default Login;