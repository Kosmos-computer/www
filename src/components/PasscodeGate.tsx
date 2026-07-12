import { useState, type FormEvent, type ReactNode } from "react";
import { ArcoLogo } from "@brand/ArcoLogo";
import { ChunkyButton } from "./ChunkyButton";
import styles from "./PasscodeGate.module.css";

const STORAGE_KEY = "kosmos-www-unlocked";
const PASSCODE = "kosmos";

function readUnlocked(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function persistUnlock(): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // sessionStorage may be unavailable in private mode
  }
}

type PasscodeGateProps = {
  children: ReactNode;
};

/** Temporary site-wide gate — unlock persists for the browser session. */
export function PasscodeGate({ children }: PasscodeGateProps) {
  const [unlocked, setUnlocked] = useState(readUnlocked);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);

  if (unlocked) {
    return <>{children}</>;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (passcode.trim().toLowerCase() === PASSCODE) {
      persistUnlock();
      setUnlocked(true);
      setError(false);
      return;
    }

    setError(true);
    setPasscode("");
  };

  return (
    <div className={styles.screen}>
      <div className={styles.card}>
        <ArcoLogo className={styles.logo} title="Kosmos" />
        <p className={styles.eyebrow}>Private preview</p>
        <h1 className={styles.title}>Enter passcode</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="site-passcode" className={styles.label}>
            Passcode
          </label>
          <input
            id="site-passcode"
            className={styles.input}
            type="password"
            value={passcode}
            onChange={(event) => {
              setPasscode(event.target.value);
              setError(false);
            }}
            autoComplete="off"
            autoFocus
          />
          {error ? <p className={styles.error}>Incorrect passcode. Try again.</p> : null}
          <ChunkyButton type="submit" className={styles.submit}>
            Continue
          </ChunkyButton>
        </form>
      </div>
    </div>
  );
}
