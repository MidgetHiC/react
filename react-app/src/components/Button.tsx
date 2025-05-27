interface Props {
    children: string
    text: string
    onClicked: (text: string) => void;
}

function Button({children, text, onClicked}: Props) {
    return (
        <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => {
                    onClicked(text)
                }
            }>
                {children}
        </button>
    );
}

export default Button;