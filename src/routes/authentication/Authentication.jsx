import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";

const Authentication = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
