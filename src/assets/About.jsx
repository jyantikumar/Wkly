function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center text-white p-4">
      
      {/* 1. Header Styling */}
      <h2 className="text-4xl font-bold mb-6 text-shadow-lg">
        About Weeekly
      </h2>
      
      {/* 2. Main Content Box with Transition */}
      <h3 className="
        text-xl 
        max-w-3xl 
        text-center 
        p-8 
        rounded-2xl 
        bg-black/60 
        backdrop-blur-md 
        border 
        border-white/50 
        shadow-2xl 
        font-light 
        tracking-wide
      ">
Weeekly is a South Korean girl group formed by IST Entertainment. They debuted on June 30, 2020 as a seven-member group—Soojin, Monday, Soeun, Jaehee, Jihan, Zoa, and Jiyoon—with their first EP, We Are.

Jiyoon departed from the group on June 1, 2022. The remaining six members continued activities until IST Entertainment announced the conclusion of their contracts on February 26, 2025.      </h3>
      
    </div>
  )
}

export default About;