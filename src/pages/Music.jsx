export default function Music() {
  return (
    
    <section className="px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-zenithRed">Music</h2>
      <p className="mt-4">Listen now on your favorite platform:</p>
      <a 
        href="https://music.apple.com/za/artist/zenith/1512059934"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-zenithRed text-white px-6 py-2 rounded mt-4 inline-block"
      >
        Apple Music
      </a>
AQMCUjDbozNwG5uNJMjIe0rb-Z8MYFqWw1yw5yZx1jI6YKjB5BC4_i9sfmHGWDAQEXikKqTcYebYF6xR0DShF87wlY19M7_7.mp4
      <div className="mt-8 flex justify-center">
        <iframe
          title="R N $ Single"
          src="https://embed.music.apple.com/us/album/r-n-%24-single/1730984250?itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1730984250&amp;theme=auto"
          style={{ border: 0, borderRadius: '12px', width: '100%', height: '450px', maxWidth: '660px' }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          allow="autoplay *; encrypted-media *; clipboard-write"
        ></iframe>
      </div>
    </section>
  );
}
