import { useState } from 'react'
import Header from './components/Header'
import GAFeatures from './components/GAFeatures'
import FeatureComparison from './components/FeatureComparison'

function App() {
  const [activeTab, setActiveTab] = useState('ga')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <main className="max-w-7xl mx-auto">
        <div className="p-6">
          {/* Tab Content */}
          {activeTab === 'ga' && <GAFeatures />}
          {activeTab === 'comparison' && <FeatureComparison />}
        </div>
      </main>
    </div>
  )
}

export default App
