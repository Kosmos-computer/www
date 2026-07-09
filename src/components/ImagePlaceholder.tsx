import shared from "../styles/shared.module.css";

type ImagePlaceholderProps = {
  label?: string;
};

export function ImagePlaceholder({ label = "Image" }: ImagePlaceholderProps) {
  return (
    <div className={shared.imagePlaceholder} aria-hidden="true">
      <span className={shared.imagePlaceholderLabel}>{label}</span>
    </div>
  );
}
