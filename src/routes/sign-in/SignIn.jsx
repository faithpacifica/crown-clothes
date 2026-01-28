import { signInWithGooglePopup } from "../../utils/firebase/firebase";

const SignIn = () => {
  const LogGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h2>Sign In</h2>

      <button onClick={LogGoogleUser}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
