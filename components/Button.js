export const Button = ({ primary, children, classNames, ...props }) => {
    return (
        <button className={`px-4 py-2 rounded-lg 
            ${primary ? "bg-primary text-white" : "bg-secondary text-black"}
         hover:bg-gray-600 transition ${classNames} cursor-pointer`} {...props}>
            {children}
        </button>
    )
}