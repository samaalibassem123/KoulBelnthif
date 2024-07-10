import Header from "@/components/Header";
import Dashboard from "@/components/UserAccount/Dashboard/Dashboard";
import FormInfo from "@/components/UserAccount/Formulaire/FormInfo";
import FormFood from "@/components/UserAccount/Formulaire/FormFood";

export default function page({ params }) {
  const id = params.id;

  return (
    <main className="flex flex-col items-center">
      <Header />
      <Dashboard />
      <FormInfo />
      <FormFood />
    </main>
  );
}
