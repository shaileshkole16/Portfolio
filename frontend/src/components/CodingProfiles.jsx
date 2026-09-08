import { Trophy, Target, Code, Award, ExternalLink } from 'lucide-react'

function CodingProfiles() {
  const profiles = [
    {
      platform: 'LeetCode',
      icon: <Code size={32} />,
      username: 'shaileshkole',
      stats: { solved: '150+', rating: '1200+' },
      url: 'https://leetcode.com/shaileshkole',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      platform: 'HackerRank',
      icon: <Target size={32} />,
      username: 'shaileshkole',
      stats: { solved: '100+', stars: '4' },
      url: 'https://hackerrank.com/shaileshkole',
      color: 'from-green-500 to-emerald-500'
    },
    {
      platform: 'CodeChef',
      icon: <Trophy size={32} />,
      username: 'shaileshkole',
      stats: { solved: '50+', rating: '1200' },
      url: 'https://codechef.com/users/shaileshkole',
      color: 'from-brown-500 to-orange-500'
    },
    {
      platform: 'Codeforces',
      icon: <Award size={32} />,
      username: 'shaileshkole',
      stats: { solved: '80+', rating: '1100' },
      url: 'https://codeforces.com/profile/shaileshkole',
      color: 'from-blue-500 to-purple-500'
    }
  ]

  return (
    <section id="coding-profiles" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Coding <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Profiles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Problem-solving skills and competitive programming achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${profile.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {profile.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {profile.platform}
              </h3>
              <p className="text-gray-400 text-sm mb-3">@{profile.username}</p>
              <div className="space-y-2">
                {Object.entries(profile.stats).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-500 capitalize">{key}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Profile</span>
                <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles
