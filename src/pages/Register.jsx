import React, { use, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { AuthContext } from '../AuthContexts/AuthProvider';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Register = () => {
    
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [toggle, setToggle] = useState(false)
    
    const { createUser, setUser, updateUser, signInwithGoogle } = use(AuthContext);
    const navigate = useNavigate();

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleDemoRegister = (role) => {
        if (role === 'admin') {
            setName("Admin User");
            setPhoto("https://i.ibb.co.com/GtdS8S8/admin.png");
            setEmail("admin@foodreview.com");
            setPassword("Admin123@");
            setConfirmPassword("Admin123@");
            toast.info("Admin demo data filled!");
        } else {
            setName("Regular Foodie");
            setPhoto("https://i.ibb.co.com/mR7099v/user.png");
            setEmail("user@foodreview.com");
            setPassword("User123@");
            setConfirmPassword("User123@");
            toast.info("User demo data filled!");
        }
    };

    const saveUserToDatabase = (name, email, image) => {

        const userRole = email === "admin@foodreview.com" ? "admin" : "Foodie";
        const newUser = { name, email, image, role: userRole };
        
        fetch('https://food-lovers-server-blond.vercel.app/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log('User saved to DB:', data);
        })
        .catch(err => console.error('Error saving user:', err));
    }

    const handleRegister = (e) => {
        e.preventDefault();

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            toast.error('Password must be at least 6 characters with uppercase, lowercase, number, and special character.');
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }

        createUser(email, password)
            .then(res => {
                const user = res.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        saveUserToDatabase(name, email, photo);
                        setUser({ ...user, displayName: name, photoURL: photo });
                        toast.success('Registration successful');
                        navigate('/');
                    })
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInwithGoogle()
            .then(result => {
                const user = result.user;
                saveUserToDatabase(user.displayName, user.email, user.photoURL);
                setUser(user);
                toast.success('Google login successful');
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    };

    return (
        <div className='relative py-18'>
            <title>Register</title>
            <div className='flex justify-center items-center min-h-fit'>
                <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h1 className='font-semibold text-sm lg:text-2xl text-center '>Register your account</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            
                            <input name='name' value={name} onChange={(e) => setName(e.target.value)} type="text" className="input w-full" placeholder="Name" required />

                            <label className="label">Photo URL</label>
                            <input name='photo' value={photo} onChange={(e) => setPhoto(e.target.value)} type="text" className="input w-full" placeholder="Photo URL" required />

                            <label className="label">Email</label>
                            <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="input w-full" placeholder="Email" required />

                            <div className='relative'>
                                <label className="label">Password</label>
                                <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type={toggle ? 'text' : 'password'} className="input w-full" placeholder="Password" required />
                                <div className='absolute bottom-3.5 right-5 cursor-pointer' onClick={handleToggle}>
                                    {toggle ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>

                            <div className='relative'>
                                <label className="label">Confirm Password </label>
                                <input name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type={toggle ? 'text' : 'password'} className="input w-full" placeholder="Confirm Password" required />
                                <div className='absolute bottom-3.5 right-5 cursor-pointer' onClick={handleToggle}>
                                    {toggle ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>

                            <button type='submit' className="btn bg-blue-800 hover:bg-blue-500 text-white mt-4 w-full">Register</button>
                            
                            {/* Demo Section */}
                            <div className="mt-6 p-4 border border-dashed border-blue-400 rounded-lg bg-blue-50 dark:bg-slate-800">
                                <p className="text-xs font-bold text-center mb-3 text-blue-800 dark:text-blue-300 uppercase">Quick Demo Fill</p>
                                <div className="flex gap-2 justify-center">
                                    <button type="button" onClick={() => handleDemoRegister('admin')} className="btn btn-xs btn-outline btn-secondary font-bold">Admin Data</button>
                                    <button type="button" onClick={() => handleDemoRegister('user')} className="btn btn-xs btn-outline btn-primary font-bold">User Data</button>
                                </div>
                            </div>

                            <div className="divider text-center font-bold">OR</div>
                            
                            <button type='button' onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] w-full">
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Register with Google
                            </button>

                            <p className='text-center py-5'>Already Have An Account? <Link to='/auth/login' className='text-secondary font-semibold'>Login</Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;