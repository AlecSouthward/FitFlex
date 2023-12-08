import '../CSS/SignIn.css'

const API_URL = process.env.API_URL || 'http://localhost:8080'

const SignIn = () => {
    // handleSignIn for when the user wants to sign in
    const handleSignIn = (event) => {
        fetch(`${API_URL}/api/users/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: event.target.email.value,
                password: event.target.password.value,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                if (data[0]) {
                    // If the data for the user can be found, store it in localStorage
                    localStorage.setItem('user', data[0]._id);
                    localStorage.setItem('perms', data[0].perms);

                    // navigates to the home page
                    window.location.href = '/';
                    window.location.reload();
                } else {
                    // If the user object cannot be found, alert the user about incorrect credentials
                    alert("Incorrect Email or Password!");
                }
            })
            .catch(err => console.log(err));

    }

    // Removes the 'user' and 'perms' items from localStorage
    // and refreshes the page
    const handleSignOut = () => {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            localStorage.removeItem('perms');

            window.location.reload();
        }
    }

    return (
        <div>
            {localStorage.getItem('user') ?
                // Message to show when signed in and a 
                // button to sign out
                <form onSubmit={handleSignOut} style={{ textAlign: 'center' }}>
                    <h1>Would you like to Sign Out?</h1>
                    <button>Sign out?</button>
                </form> :

                // HTML for the main SignIn page
                <div>
                    <h1 style={{ textAlign: 'center' }}>Sign In</h1>

                    {/* Form for the user sign in page */}
                    <form onSubmit={(e) => handleSignIn(e)} className="signin">
                        <input name="email" type="email"
                            placeholder="Email Address..." required />
                        <input name="password" type="password"
                            placeholder="Password..." required />

                        <button type="submit">Sign In</button>
                    </form>
                </div>
            }
        </div>
    );
};

export default SignIn;