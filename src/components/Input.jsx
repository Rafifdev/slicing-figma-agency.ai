import assets from "../assets/assets";

const Input = ({ children, htmlFor, type, placeholder, logo, tag }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium dark:text-white text-gray-700"
      >
        {children}
      </label>
      <div className="flex gap-3 w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-700 font-medium">
        <img src={logo} className=""/>
        {tag == "textarea" ? (
          <textarea
            placeholder={placeholder}
            className="text-sm dark:text-white w-full outline-none"
            rows={8}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="text-sm dark:text-white w-full outline-none"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
