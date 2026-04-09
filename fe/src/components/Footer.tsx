export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-300 dark:border-white/10 
                       bg-white dark:bg-black 
                       text-gray-700 dark:text-gray-400 transition-colors duration-300">

      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between">
        
        <p>© 2026 Adarsh Mishra</p>

        <div className="flex gap-4">
          <a href="https://github.com/AdarshC0de" className="hover:text-black dark:hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/adarsh-mishra-1999am" className="hover:text-black dark:hover:text-white">LinkedIn</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adarsh.m9137@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">Email</a>
        </div>

      </div>
    </footer>
  );
}