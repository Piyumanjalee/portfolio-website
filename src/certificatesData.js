/**
 * Certificate data list exported for the Certificates carousel component
 */
export const certificatesData = [
  {
    filename: "coursera-google-ai.pdf",
    title: "Google AI Certificate",
    issuer: "Coursera",
    date: "Date",
    type: "pdf"
  },
  {
    filename: "hackerrank-sql-basic.jpg",
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Date",
    type: "image"
  },
  {
    filename: "uom-python-for-beginners.jpg",
    title: "Python for Beginners",
    issuer: "UoM",
    date: "Date",
    type: "image"
  },
  {
    filename: "udemy-java-bootcamp.jpg",
    title: "Java Bootcamp",
    issuer: "Udemy",
    date: "Date",
    type: "image"
  },
  {
    filename: "udemy-c-cpp-programming.pdf",
    title: "C/C++ Programming",
    issuer: "Udemy",
    date: "Date",
    type: "pdf"
  },
  {
    filename: "udemy-javascript-html-css.pdf",
    title: "JavaScript, HTML, CSS Essentials",
    issuer: "Udemy",
    date: "Date",
    type: "pdf"
  },
  {
    filename: "udemy-chatbot-beginner.pdf",
    title: "Chatbot for Beginner",
    issuer: "Udemy",
    date: "Date",
    type: "pdf"
  },
  {
    filename: "udemy-mastering-postman.pdf",
    title: "Mastering Postman",
    issuer: "Udemy",
    date: "Date",
    type: "pdf"
  },
  {
    filename: "coursera-google-ai-essentials-v1.pdf",
    title: "Google AI Essentials v1",
    issuer: "Coursera",
    date: "Date",
    type: "pdf"
  }
];

// Dynamic asset URL resolver incorporating the requested new URL helper pattern
export const getCertificateUrl = (filename) => {
  try {
    return new URL(`./assets/certificates/${filename}`, import.meta.url).href;
  } catch (err) {
    return `/src/assets/certificates/${filename}`;
  }
};
