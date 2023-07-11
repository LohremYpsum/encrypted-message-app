import React from 'react';

const MessageField = ({ label, value, onChange }) => {
  return (
    <div>
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
      <textarea 
      type="text" value={value} onChange={onChange}
     
      rows="6" 
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
      placeholder="">

      </textarea>
     
    </div>
  );
};

export default MessageField;
