interface ButtonProps {
    child: string;
}

const Button = (props: ButtonProps) => {
    return (
        <button
            type="submit"
            className="w-44 px-4 py-3 my-2 bg-primary rounded-3xl hover:bg-button_hover transition-all"
        >
            {props.child}
        </button>
    );
}

export default Button;