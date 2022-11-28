export function Register() {
    const dest = process.env.REACT_APP_PORT + '/users/register';
    return(
        <div>
            <h1>Welcome to the register page</h1>
            <form action={dest} method='POST'>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' name='email' required />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' required />
                </div>
                <div>
                    <label htmlFor='first_name'>First Name</label>
                    <input type='text' id='first_name' name='first_name' required />
                </div>
                <div>
                    <label htmlFor='last_name'>Last Name</label>
                    <input type='text' id='last_name' name='last_name' required />
                </div>
                <div>
                    <label htmlFor='address_1'>Address 1</label>
                    <input type='text' id='address_1' name='address_1' required />
                </div>
                <div>
                    <label htmlFor='address_2'>Address 2</label>
                    <input type='text' id='address_2' name='address_2' required />
                </div>
                <div>
                    <label htmlFor='address_3'>Address 3</label>
                    <input type='text' id='address_3' name='address_3' required />
                </div>
                <div>
                    <label htmlFor='postcode'>Postcode</label>
                    <input type='text' id='postcode' name='postcode' required />
                </div>
                <div>
                    <label htmlFor='phone_number'>Phone number</label>
                    <input type='text' id='phone_number' name='phone_number' required />
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}