"use client";

import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import styles from "./PasswordGate.module.css";

const PASS = "BaselineMarie";
const STORAGE_KEY = "proposal_phase2_authed";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

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

  // Both server and client render null before useEffect — no hydration mismatch
  if (!mounted) return null;

  if (authed) return <>{children}</>;

  return (
    <div className={styles.gate}>
      <div className={styles.glow} />
      <div className={`${styles.card} ${error ? styles.shake : ""}`}>
        <Image
          src="/images/proposal/AppIcon-180.png"
          alt="Baseline"
          width={72}
          height={72}
          className={styles.icon}
        />
        <h1 className={styles.title}>Baseline V2</h1>
        <p className={styles.sub}>Enter password to view this proposal</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <button className={styles.btn} type="submit">
            View Proposal
          </button>
        </form>
        {error && <p className={styles.error}>Incorrect password</p>}
      </div>
    </div>
  );
}
