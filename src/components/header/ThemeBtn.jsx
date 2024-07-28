import React from "react";

export default function ThemeBtn({ device, onClick, theme }) {
  return (
    // There are two themes : desktop & mobile
    <button
      className={`theme-btn theme-btn-${device} ${theme}`}
      onClick={onClick}
    >
      <ion-icon name="moon" className="moon"></ion-icon>
      <ion-icon name="sunny" className="sun"></ion-icon>
    </button>
  );
}
