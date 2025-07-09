export default function YouTubeEmbed() {
  return (
    <section className="bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=dQw4w9WgXcQ"
          title="Chill Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
