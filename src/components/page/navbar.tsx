import { useEffect, useState } from "react";
import JmTitle from "../jm-title";
import Menu from "../menu";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY <= 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full h-20 flex items-center justify-between px-4 bg-primary-foreground transition-transform duration-500 mb-2 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <Menu />
      <JmTitle />
      <ModeToggle />
    </div>
  );
}
