import React, { Suspense } from "react";
// @ts-ignore
const RemoteApp = React.lazy(() => import("enterprise/App"));

function App() {
  return (
    <>
      <div className="App">staff</div>
      <Suspense fallback={"loading"}>
        <RemoteApp />
      </Suspense>
    </>
  );
}

export default App;
