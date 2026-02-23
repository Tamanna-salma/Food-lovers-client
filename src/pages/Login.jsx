import { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthContexts/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";


const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState('');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInUser, signInwithGoogle, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle);
  };
  
  const emailRef = useRef();

  
  const handleDemoLogin = (role) => {
    if (role === 'admin') {
      setEmail("admin@foodreview.com");
      setPassword("Admin123@");
      toast.info("Admin credentials failed!");
    } else {
      setEmail("user@foodreview.com");
      setPassword("User123@");
      toast.info("User credentials Failed !");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInUser(email, password)
      .then(res => {
        const user = res.user;
        setUser(user);
        navigate(`${location.state ? location.state : '/'}`);
        toast.success('Login Successful!');
      })
      .catch((error) => {
        setError(error.code);
        toast.error(error.code);
      });
  };

  const handleGoogleSignIn = () => {
    signInwithGoogle()
      .then(result => {
        setUser(result.user);
        navigate(`${location.state ? location.state : '/'}`);
        toast.success('You have logged in successfully!');
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-10">
      <title>Login</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className='font-bold text-2xl text-center pt-6'>Login your account</h1>
        
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label font-semibold">Email</label>
            <input 
              name='email' 
              type="email" 
              className="input input-bordered" 
              placeholder="Email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="form-control relative">
            <label className="label font-semibold">Password</label>
            <input 
              name='password' 
              type={toggle ? 'text' : 'password'} 
              className="input input-bordered" 
              placeholder="Password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <div className='absolute bottom-3.5 right-6 cursor-pointer' onClick={handleToggle}>
              {toggle ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {error && <p className='text-red-600 text-xs mt-2'> {error} </p>}

          <button type='submit' className="btn bg-blue-800 hover:bg-blue-700 mt-4 text-white w-full uppercase">Login</button>

          {/* --- Demo Credential Buttons --- */}
          <div className="mt-6 p-4 border border-dashed border-purple-400 rounded-xl bg-purple-50 dark:bg-slate-800">
            <p className="text-xs font-bold text-center mb-3 text-purple-700 dark:text-purple-400 uppercase">Demo Credentials</p>
            <div className="flex gap-2 justify-center">
              <button 
                type="button" 
                onClick={() => handleDemoLogin('admin')} 
                className="btn btn-xs btn-outline btn-secondary"
              >Admin Demo</button>
              <button 
                type="button" 
                onClick={() => handleDemoLogin('user')} 
                className="btn btn-xs btn-outline btn-primary"
              >User Demo</button>
            </div>
          </div>
          {/* ------------------------------- */}

          <div className="divider text-xs opacity-50 uppercase">Or</div>

          <button type="button" onClick={handleGoogleSignIn} className="btn btn-outline w-full gap-2 font-semibold">
            <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Google Login
          </button>

          <p className='text-center mt-6 text-sm'>
            Don't Have An Account? <Link to='/auth/register' className='text-purple-600 font-bold hover:underline'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;