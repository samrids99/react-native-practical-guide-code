import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        "Invalid User Details",
        "Could not create user, please enter valid inputs",
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Creating User..."} />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
