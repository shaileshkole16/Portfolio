import { Code, Smartphone, Server, Database, Cloud, GitBranch, Cpu, Brain, Terminal, Sparkles } from 'lucide-react'

function TechStack() {
  const stackCategories = [
    {
      icon: <Code size={32} />,
      title: 'Frontend',
      technologies: ['React.js', 'React Router', 'React Query', 'TailwindCSS', 'HTML5', 'CSS3', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend',
      technologies: ['Spring Boot 3', 'Node.js', 'Express.js', 'JWT', 'REST APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Database size={32} />,
      title: 'Database',
      technologies: ['MySQL', 'MongoDB', 'SQLite', 'Firebase'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Terminal size={32} />,
      title: 'Tools',
      technologies: ['Git', 'GitHub', 'Postman', 'VS Code', 'Linux'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile',
      technologies: ['Flutter', 'React Native', 'Android Studio', 'iOS (Swift)'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <GitBranch size={32} />,
      title: 'Languages',
      technologies: ['Java', 'JavaScript', 'Dart', 'C', 'C++', 'SQL'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'GenAI & LLMs',
      technologies: ['OpenAI API', 'Groq API', 'LangChain', 'CrewAI', 'Ollama', 'Hugging Face', 'Prompt Engineering', 'RAG', 'Vector DBs (FAISS, ChromaDB)'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Cpu size={32} />,
      title: 'CS Fundamentals',
      technologies: ['Data Structures', 'Algorithms', 'OOP Principles', 'DBMS', 'Operating Systems'],
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: <Brain size={32} />,
      title: 'Mobile ML',
      technologies: ['TensorFlow Lite', 'Core ML', 'ML Fundamentals'],
      color: 'from-violet-500 to-purple-500'
    }
  ]

  return (
    <section id="tech-stack" className="py-20 px-4 bg-gradient-to-b from-dark to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with across the full stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
