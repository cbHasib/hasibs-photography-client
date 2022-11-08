import React from "react";
import todoList from "../../../assets/images/Customers/todoist.svg";
import typeForm from "../../../assets/images/Customers/typeform.svg";
import postcss from "../../../assets/images/Customers/postcss.svg";
import yahoo from "../../../assets/images/Customers/yahoo.svg";
import algolia from "../../../assets/images/Customers/algolia.svg";
import slack from "../../../assets/images/Customers/slack-icon.svg";

const CustomerLogo = () => {
  return (
    <div className="bg-white dark:bg-slate-900 dark:border-b dark:border-gray-800">
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <h2 class="mb-5 text-3xl font-bold leading-tight text-center text-gray-800 md:text-4xl dark:text-gray-300">
          My Clients
        </h2>
        <div className="grid grid-cols-2 gap-2 text-center lg:grid-cols-6">
          <div className="flex items-center justify-center p-6 bg-opacity-25 dark:bg-slate-800 bg-blue-200 rounded-md">
            <img
              src={todoList}
              alt="Todoist Logo"
              className="block object-contain h-16"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-opacity-25 dark:bg-slate-800 bg-blue-200 rounded-md">
            <img
              src={slack}
              alt="Slack Logo"
              className="block object-contain h-16"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-opacity-25 dark:bg-slate-800 bg-blue-200 rounded-md">
            <img
              src={typeForm}
              alt="Typeform Logo"
              className="block object-contain h-16"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-opacity-25 dark:bg-slate-800 bg-blue-200 rounded-md">
            <img
              src={postcss}
              alt="Postcss Logo"
              className="block object-contain h-16"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-opacity-25 dark:bg-slate-800 bg-blue-200 rounded-md">
            <img
              src={yahoo}
              alt="Yahoo Logo"
              className="block object-contain h-16"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-opacity-25 dark:bg-slate-800 bg-blue-200 rounded-md">
            <img
              src={algolia}
              alt="Algolia Logo"
              className="block object-contain h-16"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerLogo;
