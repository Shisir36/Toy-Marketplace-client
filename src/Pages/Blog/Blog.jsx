import { useState } from "react";

const blogs = [
  {
    id: 1,
    question: "What is an access token and refresh token?",
    answer:
      "An access token is a credential that is used to authenticate and authorize access to protected resources in a system. It is usually issued to a client after a successful login or authentication process. Access tokens are short-lived and are used to access resources on behalf of a user. On the other hand, a refresh token is a long-lived token that is used to obtain a new access token when the current one expires. Refresh tokens are typically used in combination with access tokens to provide a seamless user experience without requiring frequent logins.\n\nAccess tokens should be stored on the client-side securely, usually in the browser's memory or local storage. It is important to protect them from unauthorized access or exposure to mitigate security risks.",
  },
  {
    id: 2,
    question: "Compare SQL and NoSQL databases?",
    answer:
      "SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems. SQL databases are based on a structured schema and use a tabular format with rows and columns to store data. They follow ACID (Atomicity, Consistency, Isolation, Durability) properties and are suitable for complex transactions and relationships between data.\n\nOn the other hand, NoSQL databases are designed to handle unstructured and varied data types. They offer high scalability and performance and are often used for large-scale applications with high read/write operations. NoSQL databases do not rely on a fixed schema and can be document-oriented, key-value pairs, column-oriented, or graph databases.\n\nThe choice between SQL and NoSQL depends on the specific requirements of the application, such as data structure, scalability needs, and the nature of the data being stored.",
  },
  {
    id: 3,
    question: "What is Express.js?",
    answer:
      "Express.js is a popular and minimalist web application framework for Node.js. It provides a set of features and utilities to build web applications and APIs quickly and easily. Express.js is known for its simplicity and flexibility, allowing developers to create server-side applications with fewer lines of code.\n\nExpress.js provides middleware functions that can be used to handle requests, routing, error handling, and other common tasks in web development. It also integrates well with various template engines, databases, and third-party libraries, making it a versatile choice for building web applications.\n\nExpress.js is widely used in the Node.js ecosystem and has a large and active community that contributes to its development and provides numerous resources and plugins to enhance its functionality.",
  },
  {
    id: 4,
    question: "What is MongoDB aggregate and how does it work?",
    answer:
      "MongoDB's aggregation framework is a powerful tool used for data processing and transformation within the database. It allows you to perform complex operations on collections and documents to retrieve, filter, group, and analyze data.\n\nThe aggregation pipeline in MongoDB consists of multiple stages, each performing a specific operation on the data. These stages can include matching documents, sorting, grouping, projecting specific fields, performing calculations, and more. The output of one stage is passed as input to the next stage, allowing you to create a pipeline of operations to manipulate the data.\n\nThe aggregation framework in MongoDB provides a flexible and efficient way to perform advanced data aggregation and analytics tasks. It is particularly useful for generating reports, data analysis, and deriving insights from large datasets.",
  },
];

const Blog = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleCollapse = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <div className="md:py-16 md:px-10 px-3 py-8 bg-gradient-to-t from-cyan-100 to-pink-100   ">
     <h1 className="text-center font-bold md:text-5xl text-4xl gFont bg-gradient-to-r from-black via-gray-600 to-slate-300 text-transparent bg-clip-text md:p-5 p-4 mb-10">
                    Blog 
                </h1>
     
      {blogs.map((blog) => (
        <div
          key={blog.id}
          tabIndex={0}
          className={`collapse collapse-plus text-slate-50 bg-base-100 rounded-box  bg-gradient-to-r from-cyan-200  to-pink-300 container mx-auto border-2 ${
            activeId === blog.id ? "collapse-active" : ""
          }`}
          style={{ marginBottom: "1rem" }} 
        >
           
          <div
            className="collapse-title text-2xl text-black font-medium"
            onClick={() => toggleCollapse(blog.id)}
          >
            {blog.question}
          </div>
          <div
            className={`collapse-content ${
              activeId === blog.id ? "" : "collapse-hidden"
            }`}
          >
            <p className="bg-gray-800 py-10 px-5 text-white text-xl rounded-xl">{blog.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;