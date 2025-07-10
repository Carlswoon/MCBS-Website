export default function InfoModal({ name, role, bio, imgSrc, onClose }) {
  if (!name || !role || !bio || !imgSrc) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Grayscale transparent overlay */}
      <div className="absolute inset-0 bg-[#00000044] backdrop-blur-[1px] grayscale" />

      {/* Centered modal */}
      <div className="relative z-50 flex items-center justify-center min-h-screen px-4">
        <div className="relative bg-yellow-300 border-2 border-black text-black w-[90%] max-w-3xl p-6 rounded-md shadow-lg font-mono flex flex-col md:flex-row items-center md:items-start gap-6">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-0.5 leading-none"
          >
            X
          </button>

          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-2 border-b border-black pb-1">
              {name} – {role}
            </h2>
            <p className="text-sm leading-snug whitespace-pre-line">{bio}</p>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={imgSrc}
              alt={name}
              className="w-32 md:w-40 h-auto border-2 border-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
