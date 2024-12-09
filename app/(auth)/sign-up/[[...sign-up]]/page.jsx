import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#eafaff] to-[#f9fdfd]">
      <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden bg-white">
        {/* Left Section */}
        <div className="hidden md:flex flex-col items-center justify-center w-full md:w-1/2 bg-[#f3fafd] p-12">
          <img
            src="/signin.jpg"
            alt="Login"
            className="w-full max-w-md mb-8"
          />
          <h2 className="text-2xl font-bold text-gray-700">Welcome!</h2>
          <p className="text-gray-500 text-center">
            Manage your career and elevate your skills
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Account</h2>
          <p className="text-gray-500 mb-8 text-center">
            "Elevate your career with our app"
          </p>
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: {
                  backgroundColor: "#1d4ed8",
                  color: "#fff",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "16px",
                  ":hover": {
                    backgroundColor: "#2563eb",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}


