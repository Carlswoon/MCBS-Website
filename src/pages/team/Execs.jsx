export default function Execs() {
  const execs = [
    {
      name: "Mark",
      role: "President",
      bio: "Mark leads the MCBS society with a passion for strategy and snacks.",
      img: "/mahjong/people/mark.png",
      size: "full",
    },
    {
      name: "Elizabeth",
      role: "Secretary & Treasurer",
      bio: "Elizabeth keeps the minutes and the money in perfect order.",
      img: "/mahjong/people/elizabeth.png",
      size: "half",
    },
    {
      name: "Nancy",
      role: "Governance Officer",
      bio: "Nancy ensures the society runs smoothly and ethically.",
      img: "/mahjong/people/nancy.png",
      size: "half",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-22 bg-mcbs-white">
      <h1 className="text-4xl font-bold text-center text-mcbs-navy mb-12">Executive Team</h1>
      <div className="max-w-5xl mx-auto space-y-8">
        {/* President - full width */}
        {execs
          .filter((e) => e.size === "full")
          .map((exec, index) => (
            <div key={index} className="bg-mcbs-green rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
              <img src={exec.img} alt={exec.name} className="h-80 md:h-96" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-mcbs-navy">{exec.role}</h2>
                <p className="mt-1 text-mcbs-shadow font-medium">{exec.name}</p>
                <p className="mt-2 text-mcbs-shadow">{exec.bio}</p>
              </div>
            </div>
          ))}

        {/* Other execs - side by side */}
        <div className="flex flex-col md:flex-row gap-8">
          {execs
            .filter((e) => e.size === "half")
            .map((exec, index) => (
              <div key={index} className="flex-1 bg-mcbs-blue rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <img src={exec.img} alt={exec.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-mcbs-navy">{exec.role}</h2>
                  <p className="mt-1 text-mcbs-shadow font-medium">{exec.name}</p>
                  <p className="mt-2 text-mcbs-shadow">{exec.bio}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
