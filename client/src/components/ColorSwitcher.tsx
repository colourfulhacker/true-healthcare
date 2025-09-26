import { useEffect, useMemo, useState } from "react";
import { Palette, X, Eye, EyeOff } from "lucide-react";

type ThemeKey = "default" | "navy" | "green" | "clean" | "lightGray";

const THEMES: Record<ThemeKey, { name: string; vars: Record<string, string> }>= {
  default: {
    name: "Default",
    vars: {},
  },
  navy: {
    name: "Navy Blue",
    vars: {
      "--primary": "#003366",
      "--primary-foreground": "#FFFFFF",
      "--foreground": "#0b1a2b",
    },
  },
  green: {
    name: "Vibrant Green",
    vars: {
      "--primary": "#4CAF50",
      "--primary-foreground": "#FFFFFF",
      "--trust": "#4CAF50",
      "--ring": "#4CAF50",
      "--accent": "#4CAF50",
      "--accent-foreground": "#123915",
    },
  },
  clean: {
    name: "Neutral White",
    vars: {
      "--background": "#FFFFFF",
      "--foreground": "#09121f",
      "--card": "#FFFFFF",
      "--secondary": "#FFFFFF",
      "--border": "#eaeaea",
      "--input": "#efefef",
    },
  },
  lightGray: {
    name: "Light Gray",
    vars: {
      "--background": "#F5F5F5",
      "--card": "#FFFFFF",
      "--muted": "#F5F5F5",
      "--muted-foreground": "#666666",
      "--border": "#e5e5e5",
    },
  },
};

const STORAGE_KEYS = {
  theme: "th.userTheme",
  visible: "th.switcherVisible",
};

function applyThemeVariables(vars: Record<string, string>) {
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

function clearThemeVariables(vars: Record<string, string>) {
  const root = document.documentElement;
  Object.keys(vars).forEach((k) => root.style.removeProperty(k));
}

export default function ColorSwitcher() {
  const [selected, setSelected] = useState<ThemeKey>(() => {
    const fromStorage = localStorage.getItem(STORAGE_KEYS.theme) as ThemeKey | null;
    return fromStorage ?? "default";
  });
  const [visible, setVisible] = useState<boolean>(() => {
    const v = localStorage.getItem(STORAGE_KEYS.visible);
    return v === null ? false : v === "1";
  });

  const themeList = useMemo(() => Object.entries(THEMES) as Array<[ThemeKey, (typeof THEMES)[ThemeKey]]>, []);

  useEffect(() => {
    // Reset then apply to avoid accumulation
    Object.values(THEMES).forEach((t) => clearThemeVariables(t.vars));
    applyThemeVariables(THEMES[selected].vars);
    localStorage.setItem(STORAGE_KEYS.theme, selected);
  }, [selected]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.visible, visible ? "1" : "0");
  }, [visible]);

  if (!visible) {
    return (
      <button
        aria-label="Show color options"
        className="fixed z-50 bottom-4 right-4 rounded-full bg-primary text-primary-foreground shadow-lg p-3 hover:opacity-90"
        onClick={() => setVisible(true)}
      >
        <Eye size={18} />
      </button>
    );
  }

  return (
    <div className="fixed z-50 bottom-4 right-4 w-72 max-w-[88vw] rounded-xl border bg-card text-card-foreground shadow-lg">
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <div className="flex items-center gap-2 font-semibold">
          <Palette size={16} />
          Theme & Colors
        </div>
        <div className="flex items-center gap-1">
          <button
            aria-label="Hide switcher"
            className="p-1 rounded hover:bg-muted"
            onClick={() => setVisible(false)}
          >
            <EyeOff size={16} />
          </button>
          <button
            aria-label="Close"
            className="p-1 rounded hover:bg-muted"
            onClick={() => setVisible(false)}
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="p-3 grid grid-cols-2 gap-2">
        {themeList.map(([key, t]) => (
          <button
            key={key}
            className={`text-left rounded-lg border p-3 hover:bg-muted transition ${
              selected === key ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelected(key)}
          >
            <div className="font-medium mb-1">{t.name}</div>
            <div className="flex items-center gap-2">
              {Object.entries(t.vars).slice(0, 3).map(([k, v]) => (
                <span key={k} className="inline-block w-5 h-5 rounded border" style={{ background: v }} />
              ))}
            </div>
          </button>
        ))}
      </div>

      <div className="px-3 pb-3">
        <button
          className="w-full rounded-lg border px-3 py-2 text-sm hover:bg-muted"
          onClick={() => setSelected("default")}
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
}


