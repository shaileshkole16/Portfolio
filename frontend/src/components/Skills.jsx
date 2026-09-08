import { useEffect, useState } from 'react'
import { Code, Zap, Database, Cpu, Wrench } from 'lucide-react'

function Skills() {
  const [skills, setSkills] = useState([
    { id: 1, name: 'Java', category: 'Languages', proficiency: 85 },
    { id: 2, name: 'JavaScript', category: 'Languages', proficiency: 90 },
    { id: 3, name: 'Dart', category: 'Languages', proficiency: 80 },
    { id: 4, name: 'C', category: 'Languages', proficiency: 75 },
    { id: 5, name: 'C++', category: 'Languages', proficiency: 75 },
    { id: 6, name: 'SQL', category: 'Languages', proficiency: 85 },
    { id: 7, name: 'React.js', category: 'Frontend Development', proficiency: 90 },
    { id: 8, name: 'HTML5', category: 'Frontend Development', proficiency: 95 },
    { id: 9, name: 'CSS3', category: 'Frontend Development', proficiency: 95 },
    { id: 10, name: 'Flutter', category: 'Mobile Development', proficiency: 85 },
    { id: 11, name: 'React Native', category: 'Mobile Development', proficiency: 80 },
    { id: 12, name: 'Node.js', category: 'Backend & APIs', proficiency: 85 },
    { id: 13, name: 'Express.js', category: 'Backend & APIs', proficiency: 85 },
    { id: 14, name: 'Spring Boot', category: 'Backend & APIs', proficiency: 75 },
    { id: 15, name: 'MySQL', category: 'Databases', proficiency: 85 },
    { id: 16, name: 'Firebase', category: 'Databases', proficiency: 80 },
    { id: 17, name: 'SQLite', category: 'Databases', proficiency: 85 },
    { id: 18, name: 'MongoDB', category: 'Databases', proficiency: 70 },
    { id: 19, name: 'Data Structures & Algorithms', category: 'CS Fundamentals', proficiency: 85 },
    { id: 20, name: 'Operating Systems', category: 'CS Fundamentals', proficiency: 80 },
    { id: 21, name: 'OOP Principles', category: 'CS Fundamentals', proficiency: 90 },
    { id: 22, name: 'DBMS', category: 'CS Fundamentals', proficiency: 85 },
    { id: 23, name: 'Git', category: 'Tools & Platforms', proficiency: 90 },
    { id: 24, name: 'GitHub', category: 'Tools & Platforms', proficiency: 90 },
    { id: 25, name: 'VS Code', category: 'Tools & Platforms', proficiency: 95 },
    { id: 26, name: 'Android Studio', category: 'Tools & Platforms', proficiency: 75 },
    { id: 27, name: 'Linux Shell Scripting', category: 'Tools & Platforms', proficiency: 70 },
    { id: 28, name: 'Agile Development', category: 'Tools & Platforms', proficiency: 80 },
    { id: 29, name: 'Postman', category: 'Tools & Platforms', proficiency: 85 }
  ])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/api/skills')
      .then(res => res.json())
      .then(data => {
        setSkills(data)
        const uniqueCategories = [...new Set(data.map(skill => skill.category).filter(Boolean))]
        setCategories(uniqueCategories)
      })
      .catch(err => {
        console.error('Error fetching skills:', err)
        const uniqueCategories = [...new Set(skills.map(skill => skill.category).filter(Boolean))]
        setCategories(uniqueCategories)
      })
  }, [])

  const skillsByCategory = categories.reduce((acc, category) => {
    acc[category] = skills.filter(skill => skill.category === category)
    return acc
  }, {})

  const uncategorizedSkills = skills.filter(skill => !skill.category)

  const getCategoryIcon = (category) => {
    const icons = {
      'Languages': <Code size={24} />,
      'Frontend Development': <Zap size={24} />,
      'Mobile Development': <Zap size={24} />,
      'Backend & APIs': <Code size={24} />,
      'Databases': <Database size={24} />,
      'CS Fundamentals': <Cpu size={24} />,
      'Tools & Platforms': <Wrench size={24} />,
    }
    return icons[category] || <Code size={24} />
  }

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-dark to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        
        {categories.length > 0 ? (
          <div className="space-y-16">
            {categories.map((category, catIndex) => (
              <div key={category} className="animate-slide-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{category}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillsByCategory[category]?.map((skill, skillIndex) => (
                    <div 
                      key={skill.id} 
                      className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                      style={{ animationDelay: `${catIndex * 0.1 + skillIndex * 0.05}s` }}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold text-white text-lg">{skill.name}</h4>
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-xl">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-1000 ease-out"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {uncategorizedSkills.length > 0 && (
              <div className="animate-slide-up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center">
                    <Code size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Other Skills</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {uncategorizedSkills.map(skill => (
                    <div 
                      key={skill.id} 
                      className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold text-white text-lg">{skill.name}</h4>
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-xl">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-1000 ease-out"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
            {skills.map(skill => (
              <div 
                key={skill.id} 
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-white text-lg">{skill.name}</h4>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-xl">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-1000 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
