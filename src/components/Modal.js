import "../styles/Modal.css";

const Modal = ({ skill, onclose }) => {
    if (!skill) return null;


    return (
        <div className="modal=overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onclose}>&times;</button>
                <h3>{skill.name}</h3>
                <p>Used in projects:</p>
                <ul>
                    {skill.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Modal;