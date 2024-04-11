import { useState, createContext } from "react";

export const SelectedMemoContext = createContext({});

export const SelectedMemoProvider = (props) => {
  const { children } = props;

  const [selectedMemo, setSelectedMemo] = useState(null);

  return (
    <SelectedMemoContext.Provider value={{ selectedMemo, setSelectedMemo }}>
      {children}
    </SelectedMemoContext.Provider>
  );
};
