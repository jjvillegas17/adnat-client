import React from 'react';

function Login() {
  return (
    <div>
    	<div>
        	<a href="/">Adnat</a>
      	</div>
      	<div>
        	<label>Email</label>
        	<input type="email" placeholder="Email address"/>
      	</div>
      	<div>
        	<label>Password</label>
        	<input type="password" placeholder="Password"/>
      	</div>
      	<div>
        	<input type="submit" value="Log in"/>
      	</div>
      	<div>
        	<a href="/">Sign up</a>
      	</div>
      	<div>
       		<a href="/">Forgot your password?</a>
      	</div>
    </div>
  );
}

export default Login;