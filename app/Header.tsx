import { HEADER_LINKS } from "./header/config";
import { HeaderClient } from "./HeaderClient";

export default function Header() {
  return <HeaderClient links={HEADER_LINKS} />;
}
