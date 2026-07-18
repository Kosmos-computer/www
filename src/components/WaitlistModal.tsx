import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { trackEvent } from "../analytics/gtag";
import clay from "../styles/clay.module.css";
import { useWaitlist } from "./WaitlistContext";
import styles from "./WaitlistModal.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistModal() {
  const { open, closeWaitlist } = useWaitlist();
  const titleId = useId();
  const emailId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClose = () => {
      closeWaitlist();
      setStatus("idle");
      setError("");
      setEmail("");
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, [closeWaitlist]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setError(data.error || "Something went wrong. Please try again.");
        trackEvent("waitlist_error", { status: res.status });
        return;
      }

      setStatus("success");
      trackEvent("waitlist_submit", { source: "modal" });
    } catch {
      setStatus("error");
      setError("Network error. Check your connection and try again.");
      trackEvent("waitlist_error", { status: "network" });
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === dialogRef.current) closeWaitlist();
      }}
    >
      <div className={styles.panel}>
        <button
          type="button"
          className={styles.close}
          onClick={closeWaitlist}
          aria-label="Close"
        >
          ×
        </button>

        {status === "success" ? (
          <div className={styles.success}>
            <p className={styles.eyebrow}>You’re on the list</p>
            <h2 id={titleId} className={styles.title}>
              Thanks — we’ll be in touch
            </h2>
            <p className={styles.body}>
              You’re on the Kosmos cloud waitlist. We’ll email you when beta
              access opens.
            </p>
            <button type="button" className={clay.chunkyBtn} onClick={closeWaitlist}>
              Close
            </button>
          </div>
        ) : (
          <>
            <p className={styles.eyebrow}>Cloud beta</p>
            <h2 id={titleId} className={styles.title}>
              Join the waitlist
            </h2>
            <p className={styles.body}>
              Get early access to hosted Kosmos — a private cloud instance with
              inference credits to explore the OS.
            </p>

            <form className={styles.form} onSubmit={onSubmit}>
              <label className={styles.label} htmlFor={emailId}>
                Email
              </label>
              <input
                id={emailId}
                className={styles.input}
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "submitting"}
              />

              {error ? <p className={styles.error}>{error}</p> : null}

              <div className={styles.actions}>
                <button
                  type="submit"
                  className={clay.chunkyBtn}
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Joining…" : "Join waitlist"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
