import React, { use, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { AuthContext } from '../AuthContexts/AuthProvider';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Register = () => {

  const [toggle, setToggle] = useState(false)
  const { createUser, setUser, updateUser,  signInwithGoogle } = use(AuthContext);

  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleRegister = (e) => {
    e.preventDefault();

   const form = e.target;
const name = form.name.value;
const photo = form.photo.value;
const email = form.email.value;
const password = form.password.value;
 const confirmPassword = form.confirmPassword.value; 

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

if (!passwordRegex.test(password)) {
  toast.error(
    'Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.'
  );
  return;
}
if (password !== confirmPassword) {
  toast.error('Passwords do not match!');
  return;
}

console.log("Form is valid:", { name, email, photo, password, confirmPassword });

    // console.log({ name, photo, email, password, confirmPassword});

    createUser(email, password)
      .then(res => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate('/');
          toast.success('register succesfull');
          form.reset()
        })
          .catch((error) => {
            // console.log(error);
            toast.error(error.message);

            setUser(user);

          })

      }).catch(e => {
        console.log(e)
        toast.error(e.message);
      })
  }

  const handleGoogleSignIn = () => {
     signInwithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user)
        const newuser={
          name:result.user.displayName,
          email:result.user.email,
          image:result.user.photoURL
        }

        //create users

        fetch('https://food-lovers-server-blond.vercel.app/users',{
          method:'POST',
          headers:{
           ' content-type':'application/json'
          },
          body:JSON.stringify(newuser)

        })
        .then(res=>res.json())
        .then(data=>{
          console.log('data after user save',data);
        })
        navigate(`${location.state ? location.state : '/'}`)
        setUser(user)
      })
      
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode)

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
              {/* Name */}

              <label className="label">Name</label>
              <input name='name' type="text" className="input" placeholder="Name"
                required
              />
              {/*Photo URL */}

              <label className="label">Photo URl</label>
              <input name='photo' type="text" className="input" placeholder="Photo URl"
                required
              />
              {/* email */}

              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Email"
                required
              />

              {/* password */}
              <div className='relative'>
                <label className="label">Password</label>
                <input name='password' type={toggle ? 'text' : 'password'} className="input" placeholder="Password" required />
                <div className='absolute bottom-3.5 right-5' onClick={handleToggle}>{toggle ? <FaEyeSlash /> : <FaEye />}</div>

              </div>

              {/* Confirm Password */}
              <div className='relative'>
                <label className="label">Confirm Password </label>
                <input name='confirmPassword' type={toggle ? 'text' : 'confirmPassword'} className="input" placeholder="confirmPassword" required />
                <div className='absolute bottom-3.5 right-5' onClick={handleToggle}>{toggle ? <FaEyeSlash /> : <FaEye />}</div>

              </div>
              <button type='submit' className="btn bg-blue-800 hover:bg-blue-500 text-white mt-4">Register</button>
              <p className='text-center font-bold'>Or</p>
              <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
              </button>

              <p className='text-center py-5'>Allready Have An Account ?{''} <Link to='/auth/login' className='text-secondary'>Login</Link></p>

            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;




