import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Error404 from "./components/Error404/404";
import DataForm from "./components/DataForm/DataForm";
import { useAuthcontext } from "./hooks/useAuthContext";

function App() {
  const { authIsReady } = useAuthcontext();
  const {user} = useAuthcontext();
  
  return (
    <div>
      {authIsReady && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={ user ? <Dashboard /> : <Signin />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Signin />} />
            <Route path="/signin" element={!user ? <Signin /> : <Dashboard />} />
            <Route path="/signup" element={!user ? <Signup /> : <Dashboard />} />
            <Route path="*" element={<Error404 />} />
            <Route path = "/dataform" element={<DataForm />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
