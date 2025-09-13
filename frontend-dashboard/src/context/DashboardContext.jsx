import React, { useState } from "react";
import initialData from "../data.json";
import { v4 as uuidv4 } from "uuid";
import { DashboardContext } from "./DashboardContext";

export const DashboardProvider = ({ children }) => {
    const [categories, setCategories] = useState(initialData.categories);
    const [searchTerm, setSearchTerm] = useState("");

    const addWidget = (categoryId, widgetName, widgetText) => {
        setCategories((prev) =>
            prev.map((cat) =>
                cat.id === categoryId
                    ? {
                          ...cat,
                          widgets: [
                              ...cat.widgets,
                              {
                                  id: uuidv4(),
                                  name: widgetName,
                                  text: widgetText,
                              },
                          ],
                      }
                    : cat
            )
        );
    };

    const removeWidget = (categoryId, widgetId) => {
        setCategories((prev) =>
            prev.map((cat) =>
                cat.id === categoryId
                    ? {
                          ...cat,
                          widgets: cat.widgets.filter((w) => w.id !== widgetId),
                      }
                    : cat
            )
        );
    };

    const filteredCategories = categories.map((cat) => ({
        ...cat,
        widgets: cat.widgets.filter((w) =>
            w.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
    }));

    return (
        <DashboardContext.Provider
            value={{
                categories: filteredCategories,
                addWidget,
                removeWidget,
                setSearchTerm,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};
