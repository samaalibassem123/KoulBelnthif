import Header from "@/components/Header";
import Dashboard from "@/components/UserAccount/Dashboard";
import FormInfo from "@/components/UserAccount/FormInfo";

export default function page({ params }) {
  const id = params.id;
  const HasSubmit = true;
  return (
    <main className="flex flex-col items-center">
      <Header />
      {HasSubmit ? <Dashboard /> : <FormInfo />}
    </main>
  );
}
