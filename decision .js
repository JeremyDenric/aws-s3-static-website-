import Head from "next/head";
import DecisionForm from "../components/DecisionForm";

export default function DecisionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Head>
        <title>Personal Decision Tool</title>
        <meta name="description" content="A personal decision logging and reflection tool." />
      </Head>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Personal Decision Tool</h1>
        <p className="text-gray-600 mb-6">
          Use this tool to log decisions, compare outcomes, and refine your thinking patterns over time.
        </p>

        <DecisionForm />
      </div>
    </div>
  );
}
