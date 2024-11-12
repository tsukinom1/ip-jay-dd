// eslint-disable-next-line react/prop-types
const MyButton = ({className, type, children}) => {
    return (
        <button className={`myBtn ${className}`} type={type}>{children}</button>
    );
};

export default MyButton;