import '../CSS/SignUp.css'

const API_URL = process.env.API_URL || 'http://localhost:8080'

const SignUp = () => {
    const handleSignUp = (event) => {
        fetch(`${API_URL}/api/users/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value,
                perms: 0,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem('user', data._id);
                localStorage.setItem('perms', data.perms);
            })
            .catch(err => console.log(err));


        window.location.href = '/';
        window.location.reload();
    }

    // Removes the 'user' and 'perms' items from localStorage
    // and refreshes the page
    const handleSignOut = () => {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            localStorage.removeItem('perms');

            window.location.href = '/signin';
        }
    }

    return (
        <div>
            {localStorage.getItem('user') ?

                <form onSubmit={handleSignOut} style={{ textAlign: 'center' }}>
                    <h1>You are already signed in.</h1>
                    <button>Sign Out?</button>
                </form> :

                <div>
                    <h1 style={{ textAlign: 'center' }}>Sign Up</h1>

                    {/* Inputs for signing up. Name, Email and Password*/}
                    <form onSubmit={(e) => handleSignUp(e)} className="signup">
                        <input name="name" type="text" placeholder="Username..." required />
                        <input name="email" type="email" placeholder="Email Address..." required />
                        <input name="password" type="password" placeholder="Password..." required />

                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            }
        </div>
    );
};

export default SignUp;