import { useDashboard } from "../context/useDashboard";
import "../styles/Widget.css";
import { RxCross2 } from "react-icons/rx";

const Widget = ({ widget, categoryId }) => {
    const { removeWidget } = useDashboard();

    return (
        <div className="widget" role="article" aria-label={widget.name}>
            <button
                className="remove"
                title="Remove"
                onClick={() => removeWidget(categoryId, widget.id)}
            >
                <RxCross2 />
            </button>
            <h4>{widget.name}</h4>
            <p>{widget.text}</p>
        </div>
    );
};

export default Widget;
