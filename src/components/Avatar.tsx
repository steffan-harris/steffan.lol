import clsx from "clsx";
import styles from "./Avatar.module.css";

interface AvatarProps {
  className?: string;
}

function Avatar({ className }: AvatarProps) {
  return (
    <img
      src="/avatar.webp"
      alt="Photograph of Steffan"
      width={200}
      height={200}
      className={clsx(styles.avatar, className)}
    />
  );
}

export default Avatar;
