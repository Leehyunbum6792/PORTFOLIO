import FooterStlyes from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div id="About" className={FooterStlyes.background}>
      <p className={FooterStlyes.margin}>Email lhb28501@naver.com</p>
      <div className={FooterStlyes.flex}>
        <p>© 2023. Lee Hyun Bum. All rights reserved.</p>
        <ul className={`${FooterStlyes.flex} ${FooterStlyes.liItem}`}>
          <a
            href="https://github.com/Leehyunbum6792?tab=repositories"
            className={FooterStlyes.deco}>
            <li className={FooterStlyes.mr_40}>Github</li>
          </a>
          <li className={FooterStlyes.mr_40}>KakaoTalk</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
