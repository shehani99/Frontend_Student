import "./App.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
// import AddStudent from "./Components/AddStudent";
// import EditStudent from "./Components/EditStudent";
// import StudentList from "./Components/StudentList";
import Layout from "./layout/layout";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout />
    </ThemeProvider>
  )
}
