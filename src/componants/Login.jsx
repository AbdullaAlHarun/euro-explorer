import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';


const Login = () => {
  const { signInUser, googleLogin, githubLogin } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Log in successfuly",
            showConfirmButton: false,
            timer: 1500
          });

          e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        // Show error message if email and password don't match
        Swal.fire({
          position: "top-end",
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid email or password!',
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={(e) => handleSubmit(onSubmit)(e)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input {...register("email", { required: true })} type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" />
            {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input {...register("password", { required: true })} type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md" />
            {errors.password && <p className="text-red-500 text-xs mt-1">Password is required</p>}
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
            <a href="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Create an account</a>
          </div>
        </form>
        <div className="flex justify-between mt-4">
          <button
            onClick={()=>googleLogin()}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login with Google
          </button>
          <button
            onClick={()=>githubLogin()}
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;