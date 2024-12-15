import React from "react";

const HomeStats = () => {
  return (
    <>
      <div className="text-center mt-10" id="howitworks">
        <h2 className="text-purple-600 font-extrabold text-[35px] md:text-[45px]">
          HOW IT WORKS
        </h2>
      </div>
      <div className="p-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Step 1 */}
        <div className="rounded-lg border-4 border-purple-500 bg-white p-6 shadow-md transition hover:shadow-lg sm:p-8">
          <div className="text-lg my-4 font-semibold">
            <label className="bg-blue-600 pl-4 pr-4 py-2 rounded-full text-white text-xl">
              Step - 1
            </label>
          </div>
          <h3 className="text-xl font-bold text-blue-700 mb-4">
          Register and Set Up Your Profile
          </h3>
          <p className="text-lg text-gray-600">
          Begin by signing up for QuestHIRE and setting up your profile in just a few simple steps. Enter details such as your industry, role, and career goals to receive the most relevant mock interview experiences. This information enables us to customize the questions and feedback to better align with your career aspirations.
          </p>
        </div>

        {/* Step 2 */}
        <div className="rounded-lg border-4 border-purple-500 bg-white p-6 shadow-md transition hover:shadow-lg sm:p-8">
          <div className="text-lg my-4 font-semibold">
            <label className="bg-purple-600 pl-4 pr-4 py-2 rounded-full text-white text-xl">
              Step - 2
            </label>
          </div>
          <h3 className="text-xl font-bold text-purple-700 mb-4">
          Select Your Preferred Interview Type
          </h3>
          <p className="text-lg text-gray-600">
          Choose from a variety of interview types, including technical, behavioral, or case-based interviews. Whether you're preparing for a software engineering role or a marketing position, QuestHIRE offers personalized mock interview scenarios tailored to your specific requirements.
          </p>
        </div>

        {/* Step 3 */}
        <div className="rounded-lg border-4 border-purple-500 bg-white p-6 shadow-md transition hover:shadow-lg sm:p-8">
          <div className="text-lg my-4 font-semibold">
            <label className="bg-blue-600 pl-4 pr-4 py-2 rounded-full text-white text-xl">
              Step - 3
            </label>
          </div>
          <h3 className="text-xl font-bold text-blue-700 mb-4">
          AI-Powered Mock Interview
          </h3>
          <p className="text-lg text-gray-600">
          Engage in a real-time, interactive mock interview powered by advanced AI. Respond to questions tailored to the job role you selected, while the AI adjusts to your answers, mimicking a real interview environment. Practice as often as you need to perfect your skills.
          </p>
        </div>

        {/* Step 4 */}
        <div className="rounded-lg border-4 border-purple-500 bg-white p-6 shadow-md transition hover:shadow-lg sm:p-8">
          <div className="text-lg my-4 font-semibold">
            <label className="bg-blue-600 pl-4 pr-4 py-2 rounded-full text-white text-xl">
              Step - 4
            </label>
          </div>
          <h3 className="text-xl font-bold text-blue-700 mb-4">
          Receive Comprehensive Feedback
          </h3>
          <p className="text-lg text-gray-600">
            
Upon finishing your interview, receive instant feedback highlighting your strengths and areas for growth. QuestHIRE offers detailed suggestions and tips to refine your responses, ensuring you're fully prepared for real interviews. Use this feedback to consistently improve and excel in actual interview scenarios.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeStats;
