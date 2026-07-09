import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/** Hash fragments that open the beta / waitlist modal on kosmos-www. */
const WAITLIST_MODAL_HASHES = new Set(["beta", "waitlist"]);

type WaitlistContextValue = {
  open: boolean;
  openWaitlist: () => void;
  closeWaitlist: () => void;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

function hashOpensWaitlist(): boolean {
  const hash = window.location.hash.replace(/^#/, "").toLowerCase();
  return WAITLIST_MODAL_HASHES.has(hash);
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openWaitlist = useCallback(() => setOpen(true), []);
  const closeWaitlist = useCallback(() => {
    setOpen(false);
    if (hashOpensWaitlist()) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    const syncFromHash = () => {
      if (hashOpensWaitlist()) setOpen(true);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const value = useMemo(
    () => ({ open, openWaitlist, closeWaitlist }),
    [open, openWaitlist, closeWaitlist],
  );

  return <WaitlistContext.Provider value={value}>{children}</WaitlistContext.Provider>;
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) {
    throw new Error("useWaitlist must be used within WaitlistProvider");
  }
  return ctx;
}
