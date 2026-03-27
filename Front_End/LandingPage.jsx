// import React from "react";

// function LandingPage() {
//   const containerStyle = {
//     padding: "50px",
//     maxWidth: "900px",
//     margin: "auto",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     animation: "fadeIn 1s ease forwards",
//   };

//   const headingStyle = {
//     fontSize: "2.5rem",
//     fontWeight: "bold",
//     color: "#2C3E50",
//     marginBottom: "20px",
//     textAlign: "center",
//   };

//   const subHeadingStyle = {
//     fontSize: "1.2rem",
//     color: "#7F8C8D",
//     marginBottom: "40px",
//     textAlign: "center",
//     maxWidth: "700px",
//     margin: "0 auto 40px auto",
//   };

//   const sectionStyle = {
//     marginBottom: "40px",
//     lineHeight: "1.6",
//     color: "#34495E",
//     fontSize: "1.05rem",
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={headingStyle}>Welcome to StudentGrader</h1>
//       <p style={subHeadingStyle}>
//         The smart way for students to assess, improve, and prepare for the job
//         market.
//       </p>

//       <section style={sectionStyle}>
//         <h2> What is StudentGrader?</h2>
//         <p>
//           StudentGrader is an interactive assessment platform where students can
//           log in, take skill-based quizzes, and instantly get their performance
//           scores. The system is designed to help students identify their
//           strengths and weaknesses, making it easier to focus on areas that need
//           improvement.
//         </p>
//       </section>

//       <section style={sectionStyle}>
//         <h2> Why StudentGrader?</h2>
//         <p>
//           In today’s competitive job market, technical skills and
//           problem-solving ability are essential. StudentGrader helps students
//           evaluate their readiness for placement drives, competitive exams, and
//           interviews. By regularly taking assessments, students can track
//           progress and work on specific areas to increase their job readiness.
//         </p>
//       </section>

//       <section style={sectionStyle}>
//         <h2>⚙ How Does It Work?</h2>
//         <ol>
//           <li>Sign up or log in to your StudentGrader account.</li>
//           <li>Select and take the available assessments and exams.</li>
//           <li>Get instant feedback with your final score.</li>
//           <li>Review your weak areas and try again to improve.</li>
//           <li>Track your progress over time to achieve your goals.</li>
//         </ol>
//       </section>

//       <section style={sectionStyle}>
//         <h2> Get Job Ready</h2>
//         <p>
//           StudentGrader isn’t just about marks — it’s about growth. Each
//           assessment moves you one step closer to being fully prepared for your
//           dream job. Practice, improve, and succeed with StudentGrader.
//         </p>
//       </section>
//     </div>
//   );
// }

// export default LandingPage;
// import React from "react";

// function LandingPage() {
//   const containerStyle = {
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     color: "#2C3E50",
//     animation: "fadeIn 1s ease forwards",
//   };

//   const heroStyle = {
//     background: "linear-gradient(135deg, #2980B9, #6DD5FA, #FFFFFF)",
//     color: "#fff",
//     textAlign: "center",
//     padding: "80px 20px",
//   };

//   const headingStyle = {
//     fontSize: "3rem",
//     fontWeight: "bold",
//     marginBottom: "20px",
//   };

//   const subHeadingStyle = {
//     fontSize: "1.3rem",
//     maxWidth: "700px",
//     margin: "0 auto 30px auto",
//     lineHeight: "1.6",
//   };

//   const ctaButton = {
//     background: "#FF6B6B",
//     color: "#fff",
//     padding: "15px 30px",
//     borderRadius: "30px",
//     border: "none",
//     fontSize: "1rem",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   };

//   const sectionStyle = {
//     maxWidth: "1100px",
//     margin: "60px auto",
//     padding: "0 20px",
//   };

//   const cardGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "20px",
//     marginTop: "30px",
//   };

//   const cardStyle = {
//     background: "#fff",
//     padding: "25px",
//     borderRadius: "15px",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   };

//   const cardHover = {
//     transform: "translateY(-5px)",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//   };

//   const featureTitle = {
//     fontSize: "1.4rem",
//     fontWeight: "bold",
//     marginBottom: "10px",
//     color: "#2980B9",
//   };

//   const footerStyle = {
//     background: "#2C3E50",
//     color: "#fff",
//     textAlign: "center",
//     padding: "20px",
//     marginTop: "50px",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Hero Section */}
//       <div style={heroStyle}>
//         <h1 style={headingStyle}>🚀 Welcome to StudentGrader</h1>
//         <p style={subHeadingStyle}>
//           The smart way for students to assess, improve, and prepare for the job
//           market. Practice, track progress, and land your dream job!
//         </p>
//         <button
//           style={ctaButton}
//           onMouseOver={(e) => {
//             e.target.style.background = "#E63946";
//           }}
//           onMouseOut={(e) => {
//             e.target.style.background = "#FF6B6B";
//           }}
//         >
//           Get Started Now
//         </button>
//       </div>

//       {/* About Section */}
//       <section style={sectionStyle}>
//         <h2 style={{ textAlign: "center", fontSize: "2rem" }}>Why Choose StudentGrader?</h2>
//         <div style={cardGrid}>
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>📊 Instant Feedback</h3>
//             <p>
//               Take quizzes and get immediate scores to identify strengths and
//               weaknesses in real time.
//             </p>
//           </div>
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>🎯 Targeted Improvement</h3>
//             <p>
//               Focus on the skills that matter most to increase your job readiness.
//             </p>
//           </div>
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>📈 Progress Tracking</h3>
//             <p>
//               Track your performance over time and stay motivated to achieve your
//               career goals.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section style={sectionStyle}>
//         <h2 style={{ textAlign: "center", fontSize: "2rem" }}>⚙ How It Works</h2>
//         <ol style={{ maxWidth: "700px", margin: "30px auto", lineHeight: "1.8" }}>
//           <li>Sign up or log in to your account.</li>
//           <li>Select from a variety of skill-based assessments.</li>
//           <li>Get your instant score and detailed feedback.</li>
//           <li>Practice and improve weak areas.</li>
//           <li>Track your progress until you’re job-ready.</li>
//         </ol>
//       </section>

//       {/* Footer */}
//       <footer style={footerStyle}>
//         © {new Date().getFullYear()} StudentGrader | All Rights Reserved
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;

// import React from "react";

// function LandingPage() {
//   const containerStyle = {
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     color: "#2C3E50",
//     animation: "fadeIn 1s ease forwards",
//   };

//   const heroStyle = {
//     background: "linear-gradient(135deg, #2980B9, #6DD5FA, #FFFFFF)",
//     color: "#fff",
//     textAlign: "center",
//     padding: "80px 20px",
//   };

//   const headingStyle = {
//     fontSize: "3rem",
//     fontWeight: "bold",
//     marginBottom: "20px",
//   };

//   const subHeadingStyle = {
//     fontSize: "1.3rem",
//     maxWidth: "700px",
//     margin: "0 auto 30px auto",
//     lineHeight: "1.6",
//   };

//   const ctaButton = {
//     background: "#FF6B6B",
//     color: "#fff",
//     padding: "15px 30px",
//     borderRadius: "30px",
//     border: "none",
//     fontSize: "1rem",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   };

//   const sectionStyle = {
//     maxWidth: "1100px",
//     margin: "60px auto",
//     padding: "0 20px",
//   };

//   const cardGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "20px",
//     marginTop: "30px",
//   };

//   const cardStyle = {
//     background: "#fff",
//     padding: "25px",
//     borderRadius: "15px",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//     transition: "transform 0.3s ease, boxShadow 0.3s ease",
//   };

//   const cardHover = {
//     transform: "translateY(-5px)",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//   };

//   const featureTitle = {
//     fontSize: "1.4rem",
//     fontWeight: "bold",
//     marginBottom: "10px",
//     color: "#2980B9",
//   };

//   const footerStyle = {
//     background: "#2C3E50",
//     color: "#fff",
//     textAlign: "center",
//     padding: "20px",
//     marginTop: "50px",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Hero Section */}
//       <div style={heroStyle}>
//         <h1 style={headingStyle}>🚀 Welcome to StudentGrader</h1>
//         <p style={subHeadingStyle}>
//           The smart way for students to assess, improve, and prepare for the job
//           market. Practice, track progress, and land your dream job!
//         </p>
//         <button
//           style={ctaButton}
//           onMouseOver={(e) => {
//             e.target.style.background = "#E63946";
//           }}
//           onMouseOut={(e) => {
//             e.target.style.background = "#FF6B6B";
//           }}
//         >
//           Get Started Now
//         </button>
//       </div>

//       {/* Features Section */}
//       <section style={sectionStyle}>
//         <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
//           Why Choose StudentGrader?
//         </h2>
//         <div style={cardGrid}>
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>📊 Instant Feedback</h3>
//             <p>
//               Take quizzes and get immediate scores to identify strengths and
//               weaknesses in real time.
//             </p>
//           </div>
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>🎯 Targeted Improvement</h3>
//             <p>
//               Focus on the skills that matter most to increase your job readiness.
//             </p>
//           </div>
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>📈 Progress Tracking</h3>
//             <p>
//               Track your performance over time and stay motivated to achieve your
//               career goals.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section (Now Cards) */}
//       <section style={sectionStyle}>
//         <h2 style={{ textAlign: "center", fontSize: "2rem" }}>⚙ How It Works</h2>
//         <div style={cardGrid}>
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>1️⃣ Sign Up</h3>
//             <p>Create your StudentGrader account in seconds and get started.</p>
//           </div>
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>2️⃣ Take Assessments</h3>
//             <p>
//               Choose from a wide range of skill-based quizzes and tests to
//               evaluate your abilities.
//             </p>
//           </div>
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>3️⃣ Instant Feedback</h3>
//             <p>
//               Receive your score immediately with a detailed breakdown of your
//               performance.
//             </p>
//           </div>
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>4️⃣ Improve & Track</h3>
//             <p>
//               Work on your weak areas, retake tests, and track your progress
//               over time until you're job-ready.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer style={footerStyle}>
//         © {new Date().getFullYear()} StudentGrader | All Rights Reserved
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;


// import React from "react";

// function LandingPage() {
//   const containerStyle = {
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     color: "#2C3E50",
//     animation: "fadeIn 1s ease forwards",
//   };

//   const heroStyle = {
//     background: "linear-gradient(135deg, #2980B9, #6DD5FA, #FFFFFF)",
//     color: "#fff",
//     textAlign: "center",
//     padding: "80px 20px",
//   };

//   const headingStyle = {
//     fontSize: "3rem",
//     fontWeight: "bold",
//     marginBottom: "20px",
//   };

//   const subHeadingStyle = {
//     fontSize: "1.3rem",
//     maxWidth: "700px",
//     margin: "0 auto 30px auto",
//     lineHeight: "1.6",
//   };

//   const ctaButton = {
//     background: "#FF6B6B",
//     color: "#fff",
//     padding: "15px 30px",
//     borderRadius: "30px",
//     border: "none",
//     fontSize: "1rem",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   };

//   const sectionStyle = {
//     maxWidth: "1100px",
//     margin: "60px auto",
//     padding: "0 20px",
//   };

//   const cardGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)",
//     gap: "20px",
//     marginTop: "30px",
//   };

//   const cardStyle = {
//     background: "#fff",
//     padding: "25px",
//     borderRadius: "15px",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//     transition: "transform 0.3s ease, boxShadow 0.3s ease",
//   };

//   const cardHover = {
//     transform: "translateY(-5px)",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//   };

//   const featureTitle = {
//     fontSize: "1.4rem",
//     fontWeight: "bold",
//     marginBottom: "10px",
//     color: "#2980B9",
//   };

//   const footerStyle = {
//     background: "#2C3E50",
//     color: "#fff",
//     textAlign: "center",
//     padding: "20px",
//     marginTop: "50px",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Hero Section */}
//       <div style={heroStyle}>
//         <h1 style={headingStyle}>🚀 Welcome to StudentGrader</h1>
//         <p style={subHeadingStyle}>
//           The smart way for students to assess, improve, and prepare for the job
//           market. Practice, track progress, and land your dream job!
//         </p>
//         <button
//           style={ctaButton}
//           onMouseOver={(e) => {
//             e.target.style.background = "#E63946";
//           }}
//           onMouseOut={(e) => {
//             e.target.style.background = "#FF6B6B";
//           }}
//         >
//           Get Started Now
//         </button>
//       </div>

//       {/* Features Section */}
//       <section style={sectionStyle}>
//         <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
//           Why Choose StudentGrader?
//         </h2>
//         <div style={cardGrid}>
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>📊 Instant Feedback</h3>
//             <p>
//               Take quizzes and get immediate scores to identify strengths and
//               weaknesses in real time.
//               The earlier you understand the voids the better you can address them.
//             </p>
//           </div>

//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>🎯 Targeted Improvement</h3>
//             <p>
//               Focus on the skills that matter most to increase your job readiness.
//               As the market is shifting from the traditional readiness to practical hands on expertise.
//             </p>
//           </div>

//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>📈 Progress Tracking</h3>
//             <p>
//               Track your performance over time and stay motivated to achieve your
//               career goals.
//               Tracking your performance is more important to revisit the strategy.
//             </p>
//           </div>

//           {/* How It Works as Fourth Card */}
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>⚙ How It Works</h3>
//             <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
//               <li>Sign up or log in to your account.</li>
//               <li>Select from skill-based assessments.</li>
//               <li>Get instant feedback with detailed scores.</li>
//               <li>Review weak areas and improve over time.</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer style={footerStyle}>
//         © {new Date().getFullYear()} StudentGrader | All Rights Reserved
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;

// import React from "react";

// function LandingPage() {
//   const containerStyle = {
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     color: "#2C3E50",
//     animation: "fadeIn 1s ease forwards",
//   };

//   const heroStyle = {
//     background: "linear-gradient(135deg, #2980B9, #6DD5FA, #FFFFFF)",
//     color: "#fff",
//     textAlign: "center",
//     padding: "80px 20px",
//   };

//   const headingStyle = {
//     fontSize: "3rem",
//     fontWeight: "bold",
//     marginBottom: "20px",
//   };

//   const subHeadingStyle = {
//     fontSize: "1.3rem",
//     maxWidth: "700px",
//     margin: "0 auto 30px auto",
//     lineHeight: "1.6",
//   };

//   const ctaButton = {
//     background: "#FF6B6B",
//     color: "#fff",
//     padding: "15px 30px",
//     borderRadius: "30px",
//     border: "none",
//     fontSize: "1rem",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   };

//   const sectionStyle = {
//     maxWidth: "1100px",
//     margin: "60px auto",
//     padding: "0 20px",
//   };

//   const cardGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)",
//     gap: "20px",
//     marginTop: "30px",
//   };

//   const cardStyle = {
//     background: "#fff",
//     padding: "25px",
//     borderRadius: "15px",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     minHeight: "250px",
//   };

//   const cardHover = {
//     transform: "translateY(-8px)",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
//   };

//   const featureTitle = {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//     marginBottom: "15px",
//     color: "#2980B9",
//     textAlign: "center",
//   };

//   const featureText = {
//     fontSize: "1rem",
//     lineHeight: "1.6",
//     color: "#34495E",
//     textAlign: "justify",
//   };

//   const footerStyle = {
//     background: "#2C3E50",
//     color: "#fff",
//     textAlign: "center",
//     padding: "20px",
//     marginTop: "50px",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Hero Section */}
//       <div style={heroStyle}>
//         <h1 style={headingStyle}>🚀 Welcome to StudentGrader</h1>
//         <p style={subHeadingStyle}>
//           The smart way for students to assess, improve, and prepare for the job
//           market. Practice, track progress, and land your dream job!
//         </p>
//         <button
//           style={ctaButton}
//           onMouseOver={(e) => {
//             e.target.style.background = "#E63946";
//           }}
//           onMouseOut={(e) => {
//             e.target.style.background = "#FF6B6B";
//           }}
//         >
//           Get Started Now
//         </button>
//       </div>

//       {/* Features Section */}
//       <section style={sectionStyle}>
//         <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "30px" }}>
//           Why Choose StudentGrader?
//         </h2>
//         <div style={cardGrid}>
//           {/* Card 1 */}
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>📊 Instant Feedback</h3>
//             <p style={featureText}>
//               Take skill-based quizzes and receive detailed scores immediately. 
//               Identify your strengths and weaknesses in real-time and act on 
//               them before they become barriers to success.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>🎯 Targeted Improvement</h3>
//             <p style={featureText}>
//               Focus on what really matters for job readiness. 
//               Our platform helps you strengthen practical, hands-on expertise 
//               that employers are actively looking for, ensuring career growth.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>📈 Progress Tracking</h3>
//             <p style={featureText}>
//               Stay motivated by monitoring your performance over time. 
//               Track your learning journey, measure growth, and revisit 
//               weak areas to ensure steady progress toward your career goals.
//             </p>
//           </div>

//           {/* Card 4 */}
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>⚙ How It Works</h3>
//             <ul style={{ paddingLeft: "20px", lineHeight: "1.8", color: "#34495E" }}>
//               <li>Sign up or log in to your account.</li>
//               <li>Choose from curated skill-based assessments.</li>
//               <li>Get instant results with insights and recommendations.</li>
//               <li>Review weak areas and practice continuously.</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer style={footerStyle}>
//         © {new Date().getFullYear()} StudentGrader | All Rights Reserved
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;

// import React from "react";

// function LandingPage() {
//   const containerStyle = {
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     color: "#2C3E50",
//     animation: "fadeIn 1s ease forwards"
//   };

//   const heroStyle = {
//     background: "linear-gradient(135deg, #2980B9, #6DD5FA, #FFFFFF)",
//     color: "#fff",
//     textAlign: "center",
//     padding: "80px 20px",
//   };

//   const headingStyle = {
//     fontSize: "3rem",
//     fontWeight: "bold",
//     marginBottom: "20px",
//   };

//   const subHeadingStyle = {
//     fontSize: "1.3rem",
//     maxWidth: "700px",
//     margin: "0 auto 30px auto",
//     lineHeight: "1.6",
//   };

//   const ctaButton = {
//     background: "#FF6B6B",
//     color: "#fff",
//     padding: "15px 30px",
//     borderRadius: "30px",
//     border: "none",
//     fontSize: "1rem",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//   };

//   const sectionStyle = {
//     maxWidth: "1100px",
//     margin: "60px auto",
//     padding: "0 20px",
//   };

//   const cardGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)",
//     gap: "20px",
//     marginTop: "30px",
//   };

//   const cardStyle = {
//     background: "#fff",
//     padding: "25px",
//     borderRadius: "15px",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     minHeight: "280px",
//   };

//   const cardHover = {
//     transform: "translateY(-8px)",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
//   };

//   const featureTitle = {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//     marginBottom: "15px",
//     color: "#2980B9",
//     textAlign: "center",
//   };

//   const listStyle = {
//     listStyleType: "disc",
//     paddingLeft: "20px",
//     lineHeight: "1.8",
//     color: "#34495E",
//   };

//   const listItemStyle = {
//     marginBottom: "10px",
//     position: "relative",
//     transition: "all 0.3s ease",
//     cursor: "pointer",
//     fontWeight:"bold"
//   };

//   const listItemHover = {
//     transform: "translateX(5px)",
//     color: "#2980B9",
//   };

//   const footerStyle = {
//     background: "#2C3E50",
//     color: "#fff",
//     textAlign: "center",
//     padding: "20px",
//     marginTop: "50px"
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Hero Section */}
//       <div style={heroStyle}>
//         <h1 style={headingStyle}>🚀 Welcome to StudentGrader</h1>
//         <p style={subHeadingStyle}>
//           The smart way for students to assess, improve, and prepare for the job
//           market. Practice, track progress, and land your dream job!
//         </p>
//         <button
//           style={ctaButton}
//           onMouseOver={(e) => {
//             e.target.style.background = "#E63946";
//           }}
//           onMouseOut={(e) => {
//             e.target.style.background = "#FF6B6B";
//           }}
//         >
//           Get Started Now
//         </button>
//       </div>

//       {/* Features Section */}
//       <section style={sectionStyle}>
//         <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "30px" ,fontWeight:"bold"}}>
//           Why Choose StudentGrader?
//         </h2>
//         <div style={cardGrid}>
//           {/* Card 1 - Instant Feedback */}
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>📊 Instant Feedback</h3>
//             <ul style={listStyle}>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Get results instantly after each quiz.
//               </li>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Pinpoint strengths and weaknesses clearly.
//               </li>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Receive actionable tips for improvement.
//               </li>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Boost confidence with real-time scoring.
//               </li>
//             </ul>
//           </div>

//           {/* Card 2 - Targeted Improvement */}
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>🎯 Targeted Improvement</h3>
//             <ul style={listStyle}>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Focus only on high-impact skills.
//               </li>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Bridge gaps between theory and practice.
//               </li>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Custom learning paths for each student.
//               </li>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Align skills with current job market needs.
//               </li>
//             </ul>
//           </div>

//           {/* Card 3 - Progress Tracking */}
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>📈 Progress Tracking</h3>
//             <ul style={listStyle}>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Track your growth with detailed analytics.
//               </li>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Compare current vs. past performance.
//               </li>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Identify recurring weak areas to revisit.
//               </li>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Stay motivated with measurable progress.
//               </li>
//             </ul>
//           </div>

//           {/* Card 4 - How It Works */}
//           <div
//             style={cardStyle}
//             onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
//             onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
//           >
//             <h3 style={featureTitle}>⚙ How It Works</h3>
//             <ul style={listStyle}>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Sign up or log in to your account.
//               </li>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Choose from skill-based assessments.
//               </li>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Attempt quizzes and get instant feedback.
//               </li>
//               <li 
//                 style={listItemStyle}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, listItemHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, listItemStyle)}
//               >
//                 Review weak areas and reattempt for mastery.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer style={footerStyle}>
//         © {new Date().getFullYear()} StudentGrader | All Rights Reserved
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;


import React from "react";

function LandingPage() {
  const containerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#2C3E50",
    animation: "fadeIn 1s ease forwards",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const heroStyle = {
    background: "linear-gradient(135deg, #2980B9, #6DD5FA, #FFFFFF)",
    color: "#fff",
    textAlign: "center",
    padding: "80px 20px",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const subHeadingStyle = {
    fontSize: "1.3rem",
    maxWidth: "700px",
    margin: "0 auto 30px auto",
    lineHeight: "1.6",
  };

  const ctaButton = {
    background: "#FF6B6B",
    color: "#fff",
    padding: "15px 30px",
    borderRadius: "30px",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const sectionStyle = {
    maxWidth: "1100px",
    margin: "60px auto",
    padding: "0 20px",
    flex: 1, // pushes footer to bottom when content is short
  };

  const cardGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginTop: "30px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    minHeight: "280px",
  };

  const cardHover = {
    transform: "translateY(-8px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  };

  const featureTitle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#2980B9",
    textAlign: "center",
  };

  const listStyle = {
    listStyleType: "disc",
    paddingLeft: "20px",
    lineHeight: "1.8",
    color: "#34495E",
  };

  const listItemStyle = {
    marginBottom: "10px",
    position: "relative",
    transition: "all 0.3s ease",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const listItemHover = {
    transform: "translateX(8px)",
    color: "#2980B9",
  };

  const footerStyle = {
    background: "#2C3E50",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    marginTop: "auto", // makes footer stick to bottom
    width: "100%",     // full-width footer
    boxSizing: "border-box",
  };

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <div style={heroStyle}>
        <h1 style={headingStyle}>🚀 Welcome to StudentGrader</h1>
        <p style={subHeadingStyle}>
          The smart way for students to assess, improve, and prepare for the job
          market. Practice, track progress, and land your dream job!
        </p>
        <button
          style={ctaButton}
          onMouseOver={(e) => {
            e.target.style.background = "#E63946";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#FF6B6B";
          }}
        >
          Sign up to get started
        </button>
      </div>

      {/* Features Section */}
      <section style={sectionStyle}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "30px",
            fontWeight: "bold",
          }}
        >
          Why Choose StudentGrader?
        </h2>
        <div style={cardGrid}>
          {/* Card 1 - Instant Feedback */}
          <div
            style={cardStyle}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <h3 style={featureTitle}>📊 Instant Feedback</h3>
            <ul style={listStyle}>
              {[
                "Get results instantly after each quiz.",
                "Pinpoint strengths and weaknesses clearly.",
                "Receive actionable tips for improvement.",
                "Boost confidence with real-time scoring.",
              ].map((text, i) => (
                <li
                  key={i}
                  style={listItemStyle}
                  onMouseOver={(e) =>
                    Object.assign(e.currentTarget.style, listItemHover)
                  }
                  onMouseOut={(e) =>
                    Object.assign(e.currentTarget.style, listItemStyle)
                  }
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 - Targeted Improvement */}
          <div
            style={cardStyle}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <h3 style={featureTitle}>🎯 Targeted Improvement</h3>
            <ul style={listStyle}>
              {[
                "Focus only on high-impact skills.",
                "Bridge gaps between theory and practice.",
                "Custom learning paths for each student.",
                "Align skills with current job market needs.",
              ].map((text, i) => (
                <li
                  key={i}
                  style={listItemStyle}
                  onMouseOver={(e) =>
                    Object.assign(e.currentTarget.style, listItemHover)
                  }
                  onMouseOut={(e) =>
                    Object.assign(e.currentTarget.style, listItemStyle)
                  }
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 - Progress Tracking */}
          <div
            style={cardStyle}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <h3 style={featureTitle}>📈 Progress Tracking</h3>
            <ul style={listStyle}>
              {[
                "Track your growth with detailed analytics.",
                "Compare current vs. past performance.",
                "Identify recurring weak areas to revisit.",
                "Stay motivated with measurable progress.",
              ].map((text, i) => (
                <li
                  key={i}
                  style={listItemStyle}
                  onMouseOver={(e) =>
                    Object.assign(e.currentTarget.style, listItemHover)
                  }
                  onMouseOut={(e) =>
                    Object.assign(e.currentTarget.style, listItemStyle)
                  }
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4 - How It Works */}
          <div
            style={cardStyle}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHover)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <h3 style={featureTitle}>⚙ How It Works</h3>
            <ul style={listStyle}>
              {[
                "Sign up or log in to your account.",
                "Choose from skill-based assessments.",
                "Attempt quizzes and get instant feedback.",
                "Review weak areas and reattempt for mastery.",
              ].map((text, i) => (
                <li
                  key={i}
                  style={listItemStyle}
                  onMouseOver={(e) =>
                    Object.assign(e.currentTarget.style, listItemHover)
                  }
                  onMouseOut={(e) =>
                    Object.assign(e.currentTarget.style, listItemStyle)
                  }
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        © {new Date().getFullYear()} Unique System Skills| All Rights Reserved | app version 1.0.0
      </footer>
    </div>
  );
}

export default LandingPage;
