import { useEffect, useState } from 'react'
import { GraduationCap, Calendar, Award, Building } from 'lucide-react'

function Education() {
  const [education, setEducation] = useState([
    {
      id: 1,
      institution: 'CDAC - Advanced Computing Training School (ACTS)',
      degree: 'Introduction to Applied Generative AI: From LLMs to Agentic AI',
      field: 'Generative AI & Machine Learning',
      startDate: '2026',
      endDate: '2026',
      gpa: '',
      coursework: 'Foundations of AI, NLP & Modern LLMs, AI Tooling & APIs, Prompt Engineering, Enterprise GenAI Systems with RAG, Local LLMs & AI Governance, GenAI in SDLC, Agentic AI, LangChain, CrewAI, OpenAI API, Groq API, Hugging Face, Ollama, Vector Databases (FAISS, ChromaDB), Embeddings, RAG Pipelines'
    },
    {
      id: 2,
      institution: 'CDAC',
      degree: 'Post Graduate Certificate Programme in Mobile Computing',
      field: 'Mobile Computing',
      startDate: 'Feb 2026',
      endDate: 'Aug 2026',
      gpa: '',
      coursework: 'Operating Systems & Linux, DBMS & SQL/NoSQL (MongoDB), OOPs & Core Java, Data Structures & Algorithms, Spring Boot 3 & JPA, Android & iOS App Development, Hybrid App Development (React Native), Machine Learning Fundamentals for Mobile (TensorFlow Lite, Core ML), Aptitude & Effective Communication (120 hours - Number Systems, Ratio & Proportion, Percentages, Time & Work, Probability, Permutations & Combinations, Reasoning, Data Interpretation, Communication Skills, Public Speaking, Group Discussions, Interview Preparation)'
    },
    {
      id: 3,
      institution: 'Savitribai Phule Pune University, Pune',
      degree: 'Bachelor of Engineering (Information Technology)',
      field: 'Information Technology',
      startDate: 'July 2021',
      endDate: 'June 2025',
      gpa: 'CGPA: 7.31',
      coursework: ''
    },
    {
      id: 4,
      institution: 'Dayanand Science College, Latur',
      degree: 'Higher Secondary (12th - Science)',
      field: 'Science',
      startDate: 'June 2019',
      endDate: 'March 2021',
      gpa: '96.17%',
      coursework: ''
    },
    {
      id: 5,
      institution: 'Shri Sadanand Vidyalay, Latur',
      degree: 'Secondary School (10th)',
      field: '',
      startDate: 'June 2017',
      endDate: 'March 2019',
      gpa: '82%',
      coursework: ''
    }
  ])

  useEffect(() => {
    fetch('/api/education')
      .then(res => res.json())
      .then(data => setEducation(data))
      .catch(err => console.error('Error fetching education:', err))
  }, [])

  return (
    <section id="education" className="py-24 px-4 bg-gradient-to-b from-dark to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <GraduationCap className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-primary font-medium text-lg">{edu.institution}</p>
                    </div>
                  </div>
                  {edu.field && (
                    <div className="flex items-center gap-2 text-gray-400 mt-2">
                      <Building size={18} />
                      <span>{edu.field}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-gray-300">
                    <Calendar size={16} className="text-accent" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2 rounded-lg border border-primary/30">
                      <Award size={16} className="text-primary" />
                      <span className="text-white font-medium">{edu.gpa}</span>
                    </div>
                  )}
                </div>
              </div>
              {edu.coursework && (
                <div className="border-l-4 border-gradient-to-b from-primary to-accent pl-6 bg-gradient-to-r from-primary/5 to-transparent rounded-r-lg py-4">
                  <p className="text-sm text-gray-400 mb-2 font-medium">Relevant Coursework:</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{edu.coursework}</p>
                </div>
              )}
            </div>
          ))}
          
          {education.length === 0 && (
            <div className="text-center text-gray-500 py-20 animate-scale-in">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap size={48} className="text-gray-400" />
              </div>
              <p className="text-gray-400 text-lg">No education added yet</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Education
