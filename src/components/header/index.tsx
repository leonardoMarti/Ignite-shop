import logoImg from "@/assets/logo.svg";
import Image from "next/image";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg.src} width={130} height={52} alt="" />
    </HeaderContainer>
  );
}
