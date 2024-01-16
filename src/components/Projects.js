import prostyle from "../styles/projects.module.css";

const Projects = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <>
      <h2 id="Projects" className={prostyle.proh2}>
        Projects
      </h2>
      <div className={prostyle.all}>
        <div className={prostyle.grid}>
          <div>
            <div className={prostyle.big}>
              <p className={prostyle.project}>팀 프로젝트</p>
              <p className={prostyle.React}>React</p>
            </div>
            <div>
              <ul className={prostyle.ul}>
                <li className={prostyle.li}>01. 가계부 앱</li>
                <li>
                  월별 카테고리 지출 내역 등록 및 삭제,
                  <br /> 월별 통계, 목표, 목표 등록
                </li>
                <li className={prostyle.lilist}>#React #Node.js #Express</li>
                <li>
                  <a href="https://github.com/Leehyunbum6792/Accountbook">
                    view more
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a href="https://acount-book.github.io/Account/">
              <img
                src={`${path}/images/가계부.png`}
                alt="가계부"
                className={prostyle.img}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
