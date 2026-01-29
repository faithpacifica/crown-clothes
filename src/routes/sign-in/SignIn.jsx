import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const SignIn = () => {
  const LogGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(user);
  };
  return (
    <div>
      <h2>Sign In</h2>

      <button onClick={LogGoogleUser}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
