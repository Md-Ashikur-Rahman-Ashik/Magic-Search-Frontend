import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Login = () => {
    const {user, logInUser, googleUser, setLoading} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        logInUser(data.email, data.password)
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Login Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            setLoading(false);
    
            // Navigate after login
            navigate(location.state ? location.state : "/");
          })
          .catch(() => {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Login failed",
              showConfirmButton: false,
              timer: 1500,
            });
            setLoading(false);
    
            // Navigate after login
            navigate(location.state ? location.state : "/");
          });
    
        reset();
      };
    

    return (
        <div>
            
        </div>
    );
};

export default Login;