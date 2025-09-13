import React, { useState } from "react";
import { useDashboard } from "../context/useDashboard";
import Widget from "./Widget";
import "../styles/Category.css";
import { FaPlus } from "react-icons/fa";

const Category = ({ category }) => {
    const { addWidget } = useDashboard();
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (name.trim() && text.trim()) {
            addWidget(category.id, name, text);
            setName("");
            setText("");
            setShowForm(false);
        }
    };

    return (
        <div className="category-card">
            {/* Header */}
            <div className="category-header">
                <div className="category-title">
                    <h3>{category.name}</h3>
                    <span className="category-meta">
                        {category.widgets.length} widgets
                    </span>
                </div>

                <button
                    className="add-btn"
                    onClick={() => setShowForm(!showForm)}
                >
                    <FaPlus /> Add Widget
                </button>
            </div>

            {/* Widget List */}
            <div className="widget-list">
                {category.widgets.map((w) => (
                    <Widget key={w.id} widget={w} categoryId={category.id} />
                ))}

                {showForm && (
                    <div className="widget add-widget-card">
                        <h4>Add New Widget</h4>
                        <input
                            type="text"
                            placeholder="Enter widget name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <textarea
                            placeholder="Enter widget text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <div className="form-actions">
                            <button className="save-btn" onClick={handleAdd}>
                                Save
                            </button>
                            <button
                                className="cancel-btn"
                                onClick={() => setShowForm(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Category;
