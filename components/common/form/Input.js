const Input = ({type, name, placeholder, required, className, id, value, onChange}) => {
    return (
        <input 
            type={type} 
            id={id}
            name={name}
            required={required} 
            className={className} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;