// pages/index.js (Halaman Utama)
import Head from 'next/head'
import Banner from '../components/Banner'
import MemberList from '../components/MemberList'
import FeatureRecommendations from '../components/FeatureRecommendations'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-cyan-50">
      <Head>
        <title>XFive Community - Cyberpunk Community</title>
        <meta name="description" content="XFive Community - Komunitas Cyberpunk Modern" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Banner />
      <main className="container mx-auto px-4 py-8">
        <MemberList />
        <FeatureRecommendations />
      </main>
    </div>
  )
}