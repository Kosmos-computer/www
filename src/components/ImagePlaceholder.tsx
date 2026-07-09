import { stubImageAt, stubImageFor } from "../content/stub-images";
import shared from "../styles/shared.module.css";

type ImagePlaceholderProps = {
  /** Accessible / future caption — not shown on the image for now. */
  label?: string;
  className?: string;
  /** Stretch to fill the parent instead of capping at 10rem. */
  fill?: boolean;
  /** Explicit stub index (0–17). Overrides label-based pick. */
  stub?: number;
  /** Optional direct src; otherwise a stub screenshot is used. */
  src?: string;
};

export function ImagePlaceholder({
  label = "Image",
  className = "",
  fill = false,
  stub,
  src,
}: ImagePlaceholderProps) {
  const imageSrc =
    src ?? (typeof stub === "number" ? stubImageAt(stub) : stubImageFor(label));

  const classes = [
    shared.imagePlaceholder,
    fill ? shared.imagePlaceholderFill : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <img className={shared.imagePlaceholderImg} src={imageSrc} alt="" />
    </div>
  );
}
