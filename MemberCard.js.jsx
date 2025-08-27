// components/MemberCard.js
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MemberCard({ member }) {
  const [isPhotoVisible, setIsPhotoVisible] = useState(false)

  return (
    <div className="cyber-card">
      <div className="cyber-card-content">
        <h3 className="text-xl font-bold text-cyan-300">{member.name}</h3>
        <p className="text-cyan-100"><span className="text-cyan-500">Role:</span> {member.role}</p>
        <p className="text-cyan-100"><span className="text-cyan-500">Domisili:</span> {member.domisili}</p>
        <p className="text-cyan-100"><span className="text-cyan-500">TTL:</span> {member.ttl}</p>
        
        <button 
          className="cyber-button cyber-button-sm mt-4"
          onClick={() => setIsPhotoVisible(true)}
        >
          Lihat Foto
        </button>
      </div>

      <AnimatePresence>
        {isPhotoVisible && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setIsPhotoVisible(false)}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative bg-gray-800 rounded-lg overflow-hidden border-2 border-cyan-500"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={member.photo} 
                alt={member.name}
                className="w-full max-w-md h-auto"
              />
              <button 
                className="absolute top-2 right-2 cyber-button-sm"
                onClick={() => setIsPhotoVisible(false)}
              >
                ✕
              </button>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-cyan-300">{member.name}</h3>
                <p className="text-cyan-100">{member.role}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}