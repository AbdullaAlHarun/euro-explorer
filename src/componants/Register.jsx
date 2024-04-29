import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContex } from "../providers/AuthProvider";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const Register = () => {
  const { creatUser } = useContext(AuthContex);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const passwordType = showPassword ? "text" : "password";
  const eyeIcon = showPassword ? eye : eyeOff;

  const onSubmit = (data, e) => {
    const { email, password } = data;

    // creat user in firebase
    creatUser(email, password)
    .then((result) => {
      console.log(result);

      // Show success message using SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'User Created Successfully',
        text: 'Congratulations! Your account has been created successfully.',
      });

       // Reset the form after successful registration
      e.target.reset();
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="container mx-auto w-96 mt-8 shadow-xl p-8">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={(e) => handleSubmit(onSubmit)(e)}>
        <div className="mb-4 relative">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">Name is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            name="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              Email is required and must be valid
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="photoURL">
            Photo URL
          </label>
          <input
            {...register("photoURL")}
            type="text"
            id="photoURL"
            name="photoURL"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])/,
            })}
            type={passwordType}
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-4"
            onClick={togglePasswordVisibility}
          >
            <Icon icon={eyeIcon} size={20} />
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">
            Password must be at least 6 characters long, contain at least one
            uppercase letter, and one lowercase letter
          </p>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
