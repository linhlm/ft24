import React, { Suspense } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Desktop from "../screens/Desktop";
const NotFound = React.lazy(() => import("./../screens/NotFound"));
const SignInCallBack = React.lazy(() => import("./../screens/SignInCallBack"));
const SignIn = React.lazy(() => import("./../screens/SignIn"));

export default function(store) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <SignIn exact path="/"/>
            <SignInCallBack exact path="signin-callback"/>
            <Desktop store={store} exact path="/desktop" />
            <NotFound exact status={404} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
