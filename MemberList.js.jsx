// components/MemberList.js
import { useState } from 'react'
import MemberCard from './MemberCard'

export default function MemberList() {
  const [members] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      role: "Developer",
      domisili: "Jakarta",
      ttl: "15-04-1990",
      photo: "/members/alex.jpg"
    },
    {
      id: 2,
      name: "Sarah Miller",
      role: "Designer",
      domisili: "Bandung",
      ttl: "22-11-1992",
      photo: "/members/sarah.jpg"
    },
    {
      id: 3,
      name: "Rio Wijaya",
      role: "Content Creator",
      domisili: "Surabaya",
      ttl: "03-07-1988",
      photo: "/members/rio.jpg"
    },
    {
      id: 4,
      name: "Maya Santoso",
      role: "Community Manager",
      domisili: "Yogyakarta",
      ttl: "18-09-1995",
      photo: "/members/maya.jpg"
    }
  ])

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400 neon-title">Data Member</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}