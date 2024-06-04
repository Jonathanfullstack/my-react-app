// CustomInput.jsx
import "./Custominput.scss";

const Custominput = ({ label, value, onChange }) => {
    return (
        <div className="custom-input-container">
            <input
                type="text"
                className="custom-input"
                value={value}
                onChange={(e) => console.log(e.target.value)}
            />
            {label ? (
                <label
                    className={`${
                        value.length > 0 ? "shrink" : ""
                    } custom-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default Custominput;
