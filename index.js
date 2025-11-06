import Head from 'next/head'
import DecisionForm from '../components/DecisionForm'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>My Decision Tool</title>
      </Head>

      <h1 className="text-2xl font-bold mb-4">Personal Decision Tool</h1>

      <DecisionForm />
    </div>
  )
}
