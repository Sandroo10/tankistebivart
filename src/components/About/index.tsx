import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-16 px-6 sm:px-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-neutral-200 mb-6">About This Website</h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        This platform was born during a hackathon as a creative experiment to combine education and gamification.
        Our goal? To turn complex subjects like <strong>mathematics</strong>, <strong>physics</strong>, and <strong>programming</strong> into immersive, themed challenges inspired by video games.
        <br /><br />
        Whether you’re solving algorithm puzzles in a fantasy world or decoding physics quests in space, the journey is designed to be both educational and adventurous.
        The site also supports <strong>collaborative problem-solving</strong> with multi-step tasks, encouraging teamwork and deeper exploration of advanced topics.
      </p>
    </section>
  );
};

export default About;
