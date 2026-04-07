export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-300 dark:border-white/10 
                       bg-white dark:bg-black 
                       text-gray-700 dark:text-gray-400 transition-colors duration-300">

      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between">
        
        <p>© 2026 Adarsh Mishra</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-black dark:hover:text-white">GitHub</a>
          <a href="#" className="hover:text-black dark:hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-black dark:hover:text-white">Email</a>
        </div>

      </div>
    </footer>
  );
}