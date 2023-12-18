const InputBox = ({ type, placeholder, name, onDataChange, value }) => {
    return (
      <div className="mb-6">
        <input
          onChange={onDataChange}
          value={value}
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3  border-gray-300"
          required
          autoComplete="on"
        />
      </div>
    );
  };
  export default InputBox