import { useEffect, useId, useRef } from "react";
import clay from "../styles/clay.module.css";
import { useWaitlist } from "./WaitlistContext";
import styles from "./WaitlistModal.module.css";

export function WaitlistModal() {
  const { open, closeWaitlist } = useWaitlist();
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);

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

    const onClose = () => closeWaitlist();
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, [closeWaitlist]);

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

        <div className={styles.closed}>
          <p className={styles.eyebrow}>Beta testing</p>
          <h2 id={titleId} className={styles.title}>
            Signups are currently closed
          </h2>
          <p className={styles.body}>
            We’re not taking new beta testers right now. Check back soon when we
            launch — hosted Kosmos will open with a simple getting-started plan
            that includes <strong>$5 of inference credits</strong>, plus monthly
            plans for your private instance.
          </p>
          <ul className={styles.planList}>
            <li>
              <span className={styles.planName}>Getting started</span>
              <span className={styles.planDetail}>$5 included credits to explore the OS</span>
            </li>
            <li>
              <span className={styles.planName}>Monthly hosted</span>
              <span className={styles.planDetail}>
                Private instance, usage &amp; credits, auto-provisioned
              </span>
            </li>
          </ul>
          <button type="button" className={clay.chunkyBtn} onClick={closeWaitlist}>
            Got it — I’ll return soon
          </button>
        </div>
      </div>
    </dialog>
  );
}
