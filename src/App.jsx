import React from "react";
// Amplify
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
//amplify/ui
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// Css
import "./App.css";

Amplify.configure(awsExports);

const App = () => {
  return (
    <>
      <AmplifyAuthenticator>
        <main>
          <h1>hello world</h1>
        </main>
        <AmplifySignOut />
      </AmplifyAuthenticator>
    </>
  );
};

export default App;
