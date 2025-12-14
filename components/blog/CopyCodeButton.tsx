"use client";

import { useEffect } from "react";

export function CopyCodeButton() {
  useEffect(() => {
    const addCopyButtons = () => {
      document.querySelectorAll("pre code").forEach((code) => {
        const pre = code.parentElement;
        if (!pre || pre.querySelector(".copy-btn")) return;

        const btn = document.createElement("button");
        btn.className =
          "copy-btn absolute top-2 left-2 p-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded text-gray-300 hover:text-white text-xs cursor-pointer";
        btn.innerHTML = "Copy";
        btn.onclick = async () => {
          await navigator.clipboard.writeText(code.textContent || "");
          btn.textContent = "Copied!";
          setTimeout(() => (btn.textContent = "Copy"), 2000);
        };
        pre.style.position = "relative";
        pre.appendChild(btn);
      });
    };

    addCopyButtons();
    const observer = new MutationObserver(addCopyButtons);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
