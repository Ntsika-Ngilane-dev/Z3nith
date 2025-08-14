export default function Footer() {
  return (
    <footer className="bg-zenithGray text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Z3nith | Follow on 
        <a href="https://instagram.com/z3nith_ex" target="_blank" rel="noopener noreferrer" className="text-zenithRed ml-1">Instagram</a> 
        | Listen on 
        <a href="https://music.apple.com/za/artist/zenith/1512059934" target="_blank" rel="noopener noreferrer" className="text-zenithRed ml-1">Apple Music</a>
      </p>
    </footer>
  );
}
