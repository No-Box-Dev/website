"use client";

import { useState, useEffect, FormEvent } from "react";
import styles from "./PasswordGate.module.css";

const PASS = "klachtenafwikkeling";
const STORAGE_KEY = "proposal_112schade_authed";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setAuthed(true);
    }
    setMounted(true);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input === PASS) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setAuthed(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  if (!mounted) return null;
  if (authed) return <>{children}</>;

  return (
    <div className={styles.gate}>
      <div className={styles.glow} />
      <div className={`${styles.card} ${error ? styles.shake : ""}`}>
        <div className={styles.logoMark}>112</div>
        <h1 className={styles.title}>112Schade</h1>
        <p className={styles.sub}>Voer het wachtwoord in om dit voorstel te bekijken</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrap}>
            <input
              className={styles.input}
              type={showPass ? "text" : "password"}
              placeholder="Wachtwoord"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
            <button
              type="button"
              className={styles.eye}
              onClick={() => setShowPass((v) => !v)}
              aria-label={showPass ? "Hide password" : "Show password"}
            >
              {showPass ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          <button className={styles.btn} type="submit">
            Bekijk Voorstel
          </button>
        </form>
        {error && <p className={styles.error}>Onjuist wachtwoord</p>}
      </div>
    </div>
  );
}
