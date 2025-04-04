import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Home from "../components/Home";

export function meta() {
  return [
    { title: "Home - My React App" },
    { name: "description", content: "Welcome to the Home page of My React App!" },
  ];
}

export default function HomeRoute() {
  return <Home />;
}
