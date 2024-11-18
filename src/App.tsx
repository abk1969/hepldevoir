import React from 'react';
import StudentCard from './components/StudentCard';
import { studentData } from './data/students';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Aide aux Devoirs
          </h1>
          <p className="text-gray-600 text-lg">
            Sélectionne ton profil pour commencer à travailler
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(studentData).map((student) => (
            <StudentCard key={student.name} {...student} />
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-600">
          <p className="text-sm">
            Développé avec ❤️ Papa Abbas pour aider Fares, Safaa et Asma dans leurs études
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;