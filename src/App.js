import "./App.css";
import AuthContextProvider from "./contexts/AuthContextProvider";
import BlogContextProvider from "./contexts/BlogContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
